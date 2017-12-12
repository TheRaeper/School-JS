let wl = (d) => {document.write(d);document.write(`<br>`)}

let rol = prompt(`Wat is je rol?`)
let inlogcode = prompt(`Wat is je inlogcode?`)

//dit in een switch verwerken
if (rol == `admin` && inlogcode == `admin`) {
  wl(`Welkom admin`)
}
else {
  wl(`Code ongeldig`)
}

if (rol == `student` && inlogcode == `student`) {
  wl(`Welkom student`)
}
else {
  wl(`Code ongeldig`)
}

if (rol == ``) {
  wl(`Code ongeldig`)
}
