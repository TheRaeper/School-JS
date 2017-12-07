let klantnaam = prompt(`Wat is uw naam?`)
let aantal = Number(prompt(`Hoeveel boeken wilt u bestellen?`))
let vandaag = new Date()
let boek = (`JavaSctipt`)
let prijsboek = 29.90
let zonderbtw = aantal*prijsboek
let btw = (zonderbtw*6)/100
let metbtw = zonderbtw+btw
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
document.write(`<br>Bedankt voor je bestelling: ${klantnaam}`)
document.write(`<br>Boektitel: ${boek}`)
document.write(`<br>Aantal te bestellen: ${aantal}`)
document.write(`<br>Prijs per boek is: €${prijsboek.toFixed(2)}`)
document.write(`<br>Bedrag zonder BTW: €${zonderbtw.toFixed(2)}`)
document.write(`<br>De BTW bedraagt: €${metbtw.toFixed(2)}`)
document.write(`<br>Totaalprijs inclusief btw: €${metbtw.toFixed(2)}`)
