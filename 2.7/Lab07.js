let wl = (d) => {document.write(d);document.write('<br>')}
//Lab07
let klantnaam = prompt(`Wat is uw naam?`)
let aantal = Number(prompt(`Hoeveel boeken wilt u bestellen?`))
let woonplaats = prompt(`Wat is uw woonplaats?`)
let postcode = prompt(`Wat is uw postcode?`)

let vandaag = new Date()
let titel = (`JavaSctipt`)
let prijs = 29.90

let bedrag = aantal * prijs
let btw = (bedrag * 6) / 100
let totaal = bedrag+btw
let bezorgkosten = 15

var woonplaats1 = (woonplaats === `amsterdam` ? true : false)
var postcode1 = (postcode >= `1000AA` && postcode <= `2000BB` ? true : false)
if (woonplaats1 && postcode1){
  bezorgkosten = 0
  alert(`U betaalt geen bezorgkosten.`)
}
else {
  bezorgkosten = 15
}
let totaalbedrag = bezorgkosten + totaal
Date.prototype.addDays = function(days) {
  dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat;
}
dat = new Date()

document.write(`<br>Lab06
<br>Factuur
<br>Factuurdatum: ${vandaag}
<br>Betaaldatum: ${dat.addDays(5)}
<br>Bedankt voor je bestelling: ${klantnaam}
<br>Boektitel is: ${titel}
<br>Aantal te bestellen: ${aantal}
<br>Prijs per boek is: ${prijs.toFixed(2)}
<br>Bedrag: ${bedrag.toFixed(2)}
<br>Btw: ${btw.toFixed(2)}
<br>Totaal inclusief BTW is: ${totaal.toFixed(2)}
<br>Bezorgkosten: ${bezorgkosten}
<br>Totaal bedrag met bezorgkosten: ${totaalbedrag.toFixed(2)}`)
