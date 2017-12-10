//Lab08
let wl = (d) => {document.write(d);document.write('<br>')}

Date.prototype.addDays = function(days) {
  dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat;
}
let dat = new Date()

wl(`Vandaag is: ${dat.toDateString()}`)
let factuurdatum = dat.addDays(-16)
wl(`Factuurdatum is: ${factuurdatum.toDateString()}`)
let betaaldatum = factuurdatum.addDays(30)
wl(`Betaaldatum is: ${betaaldatum.toDateString()}`)

let vandaag = new Date()
let dagenover = betaaldatum - vandaag
if (vandaag.getDate() == betaaldatum.getDate()) {
  alert(`Meld incassobureau!`)
}
else {
  wl(`u heeft nog ${dagenover} dagen om te betalen.`)
}
