let wl = (d) => {document.write(d);document.write(`<br>`)}

let datum = new Date()
let vandaag = datum.getDay()
let uur = datum.getHours()

wl(`Het is vandaag: ${datum}`)

switch (vandaag){
  case 1:
    document.write(`maandag is mijn eerste stagedag.`)
    break
  case 2:
    document.write(`dinsdag is mijn tweede stagedag.`)
    break
  case 3:
    document.write(`woensdag is mijn JavaScriptdag.`)
    break
  case 4:
    document.write(`donderdag is mijn werkdag.`)
    break
  case 5:
    document.write(`vrijdag is mijn roostervrije dag.`)
    break
  case 5:
    document.write(`zaterdag is mijn vrije dag.`)
    break
  case 0:
    document.write(`zondag is mijn vrije dag`)
    break
  }