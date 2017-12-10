let wl = (d) => {document.write(d);document.write(`<br>`)}

let datum = new Date()
let vandaag = datum.getDay()
let uur = datum.getHours()

wl(`Het is vandaag: ${datum.toDateString()}`)

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
}
// hieronder hoe het moet volgens het boek wtf heb ik fout?
switch (n) {
  case 1:
    //acties uit te voeren als n==1
    break
  case 2:
    //acties uit te voeren als n==2
    break
  default:
    //acties uit te voeren als n anders is dan 1 en 2
}
