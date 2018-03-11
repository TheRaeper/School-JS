let klantnaam = prompt(`Wat is uw naam?`)
let aantal = Number(prompt(`Hoeveel boeken wou u bestellen?`))
let betaling = prompt(`Wat is uw gewenste manier van betalen?`)
let titel = `JavaScript`
let prijs = 29.90
let bedrag = aantal * prijs
let btw = (bedrag * 6) / 100
let totaal = bedrag + btw
document.write(`<br> Bedankt voor je bestelling: ${klantnaam}<br> Boektitel is: ${titel}<br> Aantal te bestellen: ${aantal}`)
document.write(`<br> Prijs per boek is: ${prijs.toFixed(2)}`)
document.write(`<br> Bedrag: ${bedrag.toFixed(2)}`)
document.write(`<br> Btw: ${btw.toFixed(2)}`)
document.write(`<br> Totaal inclusief BTW is: ${totaal.toFixed(2)}`)
document.write(`<br> Gewenste betaling: ${betaling}`)
