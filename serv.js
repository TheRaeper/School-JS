const express = require('express')
const fs = require('fs-extra')
const chokidar  = require('chokidar')
const pug  = require('pug')
const path  = require('path')
const app = express()
const log = console.log
const port = 3000
let fileschanged = false

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/servfiles'))

app.use(function(req, res, next) {
  let path = `.${req.path}`
  let sendErr = () => res.status(404).send('404 Not found')
  let sendHTML = () => {
    log(`injected live reload script: ${path}`)
    let FullPath = `${__dirname}/${path}`
    fs.readFile(FullPath, 'utf8', (err, data) => {
      if (err) return log(err)
      res.send(`${data}<script defer src="/servfiles/livereload.js"></script>`)
    })
  }
  let sendDIR = () => {
    fs.readdir(path, (err, files) => {
      res.render('dir', { files : files })
    })
  }
  if (path.endsWith('.html')) {
    if (fs.existsSync(path)) {
        let FileInf = fs.lstatSync(path)
        if (FileInf.isFile()) {
          sendHTML()
        } else {
          sendDIR()
        }
      } else {
        sendErr()
      }
  } else if (path.endsWith('/')) {
    let testpath = `${path}index.html`
    if (fs.existsSync(testpath)) {
      let FileInf = fs.lstatSync(testpath)
      if (FileInf.isFile()) {
        path = testpath
        sendHTML()
      } else {
        sendDIR()
      }
    } else if (fs.existsSync(path)) {
      let FileInf = fs.lstatSync(path)
      if (FileInf.isFile()) {
        sendHTML()
      } else {
        sendDIR()
      }
    } else {
      sendErr()
    }
  } else {
    next()
  }
})

app.get('/checknewdata', (req,res) => {
  (fileschanged) ? (fileschanged = false, res.json({newdata: true})) : res.json({newdata: false})

})

setTimeout(() => {
  chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    fileschanged = true
  })
}, 2000);

app.use(express.static('./'))
app.listen(port, () => log(`Example app listening on port ${port}!`))
