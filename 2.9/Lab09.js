let wl = (d) => {document.write(d);document.write(`<br>`)}

let rol = prompt(`Wat is je rol?`)
let inlogcode = prompt(`Wat is je inlogcode?`)

switch (rol && inlogcode) {
  case `admin`:
    wl(`Welkom admin`)
    break;
  case `student`:
    wl(`Welkom student`)
    break;
  default:
    wl(`code ongeldig`)
}
