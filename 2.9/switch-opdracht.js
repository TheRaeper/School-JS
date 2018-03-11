let wl = (d) => {document.write(d);document.write(`<br>`)}

let datum = new Date()
let vandaag = datum.getDay()

wl(`Het is vandaag: ${datum}`)

switch (vandaag){
  case 1:
    wl(`maandag is mijn eerste stagedag.`)
    break
  case 2:
    wl(`dinsdag is mijn tweede stagedag.`)
    break
  case 3:
    wl(`woensdag is mijn JavaScriptdag.`)
    break
  case 4:
    wl(`donderdag is mijn werkdag.`)
    break
  case 5:
    wl(`vrijdag is mijn roostervrije dag.`)
    break
  case 6:
    wl(`zaterdag is mijn vrije dag.`)
    break
  case 0:
    wl(`zondag is mijn vrije dag`)
    break
  }
