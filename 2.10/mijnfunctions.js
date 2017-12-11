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
}
//opgave 61
mijngetal = prompt(`Typ getal in`)
resultaat = verdubbel(mijngetal)
wl(`Input-getal: ${mijngetal}`)
wl(`Output-getal: ${resultaat}`)
afmelden()
