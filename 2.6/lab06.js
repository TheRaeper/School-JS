let klantnaam = prompt(`Wat is uw naam?`)
let aantal = Number(prompt(`Hoeveel boeken wilt u bestellen?`))
let vandaag = new Date()
let titel = (`JavaSctipt`)
let prijs = 29.90
let bedrag = aantal * prijs
let btw = (bedrag * 6) / 100
let totaal = bedrag+btw
Date.prototype.addDays = (days) => {
  let dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat
}
let dat = new Date()
document.write(`<br>Lab06
<br>Factuur
<br>Factuurdatum: ${vandaag}
<br>Betaaldatum: ${dat.addDays(5)}
<br> Bedankt voor je bestelling: ${klantnaam}<br> Boektitel is: ${titel}<br> Aantal te bestellen: ${aantal}
<br> Prijs per boek is: ${prijs.toFixed(2)}
<br> Bedrag: ${bedrag.toFixed(2)}
<br> Btw: ${btw.toFixed(2)}
<br> Totaal inclusief BTW is: ${totaal.toFixed(2)}`)
