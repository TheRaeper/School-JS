let einddatum = prompt(`Wat is de einddatum JJJJ-MM-DD?`)
let deadline = einddatum
document.write(`<br>Dit is de einddatum: ${deadline}`)
let vandaag = new Date(Date.now())
let datum = new Date(deadline)
let eenDag = 86400000
document.write(`<br>Er zijn nog
  ${(vandaag-datum)/eenDag.toFixed(2)}
  dagen te gaan tot de deadline`)
