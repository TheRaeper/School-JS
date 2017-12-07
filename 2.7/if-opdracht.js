//Opgave 52
let wl = (d) => {document.write(d);document.write('<br>')}

let doorgaan = confirm(`Opgave 52: Doorgaan?`)

// standaard marnier
if (doorgaan == true) {
  wl(`Welkom nij de if-opdracht`)
} else {
  wl(`NIET welkom nij de if-opdracht`)
}

// als je alleen wil weten of een variable "true" is kan je dat ook op deze marnier doen
if (doorgaan) {
  wl(`Welkom nij de if-opdracht`)
} else {
  wl(`NIET welkom nij de if-opdracht`)
}

// en nu in 1 lijn
(doorgaan) ? wl(`Welkom nij de if-opdracht`) : wl(`NIET welkom nij de if-opdracht`)
