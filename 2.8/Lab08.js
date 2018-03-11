// lab 08
let a = [(d) => {document.write(d);document.write('<br>')},new Date()]
Date.prototype.addDays = (days) => {
  let dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat
}
a.push(a[1].addDays(-16))
a.push(a[2].addDays(30))
a.push(new Date())
a.push(a[4].getDate())
a.push(a[3].getDate())
a.push((a[3] - a[4]) / (1000 * 60 * 60 * 24))
a.push(' i')
a.push('s')
a.push(a[9] + a[10])
a[0](`Vandaag${a[10]}: ${a[1].toDateString()}`)
a[0](`Factuurdatum${a[10]}: ${a[2].toDateString()}`)
a[0](`Betaaldatum${a[10]}: ${a[3].toDateString()}`)
if (a[5] == a[6]) {
  alert(`Meld incassobureau!`)
} else {
  a[0](`u heeft nog ${Math.round(a[7])} dagen om te betalen.`)
}
