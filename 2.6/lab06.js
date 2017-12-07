let klantnaam = prompt(`Wat is uw naam?`)
let aantal = Number(prompt(`Hoeveel boeken wilt u bestellen?`))
let vandaag = new Date()
let titel = (`JavaSctipt`)
let prijs = 29.90
let bedrag = aantal * prijs
let btw = (bedrag * 6) / 100
let totaal = bedrag+btw
Date.prototype.addDays = function(days) {
  dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat;
}
dat = new Date()
document.write(`<br>Lab06`)
document.write(`<br>Factuur`)
document.write(`<br>Factuurdatum: ${vandaag}`)
document.write(`<br>Betaaldatum: ${dat.addDays(5)}`)
document.write(`<br> Bedankt voor je bestelling: ${klantnaam}<br> Boektitel is: ${titel}<br> Aantal te bestellen: ${aantal}`)
document.write(`<br> Prijs per boek is: ${prijs.toFixed(2)}`)
document.write(`<br> Bedrag: ${bedrag.toFixed(2)}`)
document.write(`<br> Btw: ${btw.toFixed(2)}`)
document.write(`<br> Totaal inclusief BTW is: ${totaal.toFixed(2)}`)
