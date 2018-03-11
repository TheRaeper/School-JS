//opgave 8 vanaf hier
let voornaam  = `Carl`
let achternaam = `Petersen`
let schoolgeld = 1000
let boekengeld = 100
let bedrag = schoolgeld + boekengeld
let studiefinanciering = 600
let totaal = bedrag - studiefinanciering
let volledigenaam = voornaam + `<br>` + achternaam
document.write(
    `<p> Opgave 8 </p>${volledigenaam}<br> Totaal te betalen: ${totaal}`
)
console.log(`man's hot`)
//opgave 9 vanaf hier
let Voornaam = `Zakaria`
let Achternaam = `Bolt`
let Nederlands = 9
let Engels = 8
let Rekenen = 7
let gemiddeld = (Nederlands + Engels + Rekenen) / 3
document.write(`
  <p> Opgave 9 </p> ${Voornaam} ${Achternaam}
  <br> Nederlands: ${Nederlands}
  <br> Engels: ${Engels}
  <br> Rekenen: ${Rekenen}
  <br> Gemiddelde: ${gemiddeld}
`)
