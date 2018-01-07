wl = (d) => {document.write(d);document.write(`<br>`)}

//opgave 59
verdubbel = (inputgetal) =>
  outputgetal = inputgetal * 2

//opgave 60
afmelden = () =>
  confirm(`Wilt u zich afmelden?`) ?
    alert(`U wordt afgemeld!!!`) :
    alert('U bent niet afgemeld.')

//opgave 61
let mijngetal = prompt(`Typ getal in`)
let resultaat = verdubbel(mijngetal)
wl(`Input-getal: ${mijngetal}`)
wl(`Output-getal: ${resultaat}`)
afmelden()

//opgave 62
let begroeten = Date.now()
let uur = getHours()
if (uur >= getHours(0) <= getHours(11)){
  wl(`Goedemorgen`)
} else if (uur >= getHours(12) <= getHours(17)){
  wl(`Goedemiddag`)
} else {
  wl('Goedenavond')
}
