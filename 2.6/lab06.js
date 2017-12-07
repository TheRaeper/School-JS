let klantnaam = prompt(`Wat is uw naam?`)
let aantal = Number(prompt(`Hoeveel boeken wilt u bestellen?`))
let vandaag = new Date()
Date.prototype.addDays = function(days) {
  dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat;
}
dat = new Date()
dat2 = dat.addDays(5)
document.write(`<br>Lab06`)
document.write(`<br>Factuur`)
document.write(`<br>Factuurdatum: <b>${vandaag.getDay() }</b> - <b>${vandaag.getMonth() }</b> - <b>${vandaag.getYear() }</b>`)
document.write(`<br>Betaaldatum: ${dat2}`)
document.write(`<br>Bedankt voor je bestelling: ${klantnaam}`)
