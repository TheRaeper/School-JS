let wl = (d) => {document.write(d);document.write('<br>')}

let doorgaan = confirm(`Opgave 55: Doorgaan?`)
//opgave 55
if (doorgaan) {
  wl(`Welkom bij de if-else-if-opdracht`)
} else {
  wl(`Tot ziens`)
}

if (doorgaan) {
  var creditcard = confirm(`Heb je een creditcard?`)
  if (creditcard) {
    creditcard = true
  }
  else {
    creditcard = false
  }
}

if (doorgaan) {
  var leeftijd = parseInt(prompt(`Wat is je leeftijd?`))
  if (leeftijd > 18) {
    leeftijd = true
  }
  else {
    leeftijd = false
  }
}

if (creditcard && leeftijd){
  alert(`Je mag tot en met €1000 lenen.`)
} else if (creditcard || leeftijd) {
  alert(`Je mag tot en met €500 lenen.`)
} else {
  alert(`JE MAG GEEN GELD LENEN JONGE KUT VEREKTE MONGOL!`)
}
