//Lab08
let wl = (d) => {document.write(d);document.write('<br>')}

Date.prototype.addDays = function(days) {
  dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat;
}
let dat = new Date()

wl(`Vandaag is: ${dat}`)
let factuurdatum = dat.addDays(-16)
wl(`Factuurdatum is: ${factuurdatum}`)
let betaaldatum = factuurdatum.addDays(30)
wl(`Betaaldatum is: ${betaaldatum}`)

let vandaag = Date.now()
if (vandaag == betaaldatum) {
  alert(`Meld incassobureau!`)
}
else {
  vandaag - betaaldatum
}
