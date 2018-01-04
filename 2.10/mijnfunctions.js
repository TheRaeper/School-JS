wl = (d) => {document.write(d);document.write(`<br>`)}
//opgave 59
function verdubbel(inputgetal) {
  outputgetal = inputgetal * 2
  return (outputgetal);
}

//opgave 60
function afmelden() {
  let antwoord = confirm(`Wilt u zich afmelden?`)
  if (antwoord == true) {
    alert(`U wordt afgemeld!!!`)
  }
  if (antwoord == false){
    alert('U bent niet afgemeld.')
  }
}

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
}
if (uur >= getHours(12) <= getHours(17)){
  wl(`Goedemiddag`)
}
else {
  wl('Goedenavond')
}
