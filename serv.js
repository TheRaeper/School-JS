const express = require('express')
const fs = require('fs-extra')
const chokidar  = require('chokidar')
const pug  = require('pug')
const path  = require('path')
const opn = require('opn')
const questions = require('questions')
const colors = require('colors')
const htmlBeautify = require('html-beautify')
const app = express()
const log = console.log
const port = 3000
let fileschanged = false

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/servfiles'))

app.use(function(req, res, next) {
  let path = `.${req.path}`
  let sendErr = () => res.status(404).send('404 Not found')
  let CheckIfFile = () => {
    let FileInf = fs.lstatSync(path)
    if (FileInf.isFile()) {
      sendHTML()
    } else {
      sendDIR()
    }
  }
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
      CheckIfFile()
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
      CheckIfFile()
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
  chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', () => fileschanged = true)
}, 3000)

app.use(express.static('./'))
app.listen(port, () => log(`Example app listening on port ${port}!`)/*,opn(`http://localhost:${port}`)*/)

let cli = (firsttime) => {
  questions.askOne({ info: (firsttime) ? colors.green('type help if you dont know what to do') : '-' },(result) => {
    if (result == 'help') {
      log('|----------|')
      log('| commands |')
      log('|----------|')
      log('> ' + 'folder init'.green + ' (Maak een folder met de basic bestanden )')
      log('> ' + 'open'.green + ' (Open the webserver in a browser)')
      log('> ' + 'exit'.green + ' (sluit het script)')
      cli(false)
    } else if (result == 'folder init') {
      log(' ')
      questions.askOne({ info: colors.green('de folder naam') },(result) => {
        let dir = `./${result.replace(/ /g,'-')}/`
        fs.ensureDir(dir)
        .then(() => {
          log('folder created!'.green)
          questions.askOne({ info: colors.green('naam van de opdracht') },(result) => {
            result = result.replace(/ /g,'-')
            var html = pug.renderFile('./servfiles/basic.pug', {
              op: result,
              opjs: `${dir}${result}.js`
            })
            fs.outputFileSync(`${dir}${result}.html`, htmlBeautify(html))
            fs.copySync('./servfiles/basic.js', `${dir}${result}.js`)
            questions.askOne({ info: colors.green('Open het project in de browser (Y/y/yes or N/n/no)') },(result2) => {
              let yes = result2[0].toLocaleLowerCase() == 'y'
              if (yes) {
                opn(`http://localhost:${port}/${dir.replace('./','')}${result}.html`)
              }
              log(' ')
              setTimeout(() => {
                cli(false)
              }, (yes) ? 2000 : 10)
            })
          })
        })
        .catch(err => {
          log('Cant create folder'.red)
          cli(false)
        })
      })
    } else if (result == 'open') {
      opn(`http://localhost:${port}`)
      cli(false)
    } else if (result == 'exit') {
      process.exit()
    } else {
      log('command not found type help if you don\'t know what it can do'.red)
      cli(false)
    }
  })
}
setTimeout(() => {
  cli(true)
}, 1000)
