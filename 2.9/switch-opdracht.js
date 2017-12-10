let wl = (d) => {document.write(d);document.write(`<br>`)}

let datum = new Date()
let vandaag = datum.getDay()
let uur = datum.getHours()

wl(`Het is vandaag: ${datum}`)

switch (vandaag){
  case 1:
    wl(`maandag is mijn eerste stagedag.`)
    break
  case 2:
    wl(`dinsdag is mijn eerste stagedag.`)
    break
  case 3:
    wl(`woensdag is mijn eerste stagedag.`)
    break
  case 4:
    wl(`donderdag is mijn eerste stagedag.`)
    break
  case 5:
    wl(`vrijdag is mijn eerste stagedag.`)
    break
  case 6:
    wl(`zaterdag ben ik vrij.`)
    break
  case 7:
    wl(`zondag ben ik vrij.`)
    break
}
