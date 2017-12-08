let wl = (d) => {document.write(d);document.write('<br>')}

let doorgaan = confirm(`Opgave 52: Doorgaan?`)
//opgave 52
if (doorgaan) {
  wl(`Welkom bij de if-opdracht`)
}
//Opgave 53
else {
  wl(`tot ziens`)
}
//Opgave 54
if (doorgaan) {
  leeftijd = parseInt(prompt(`Wat is je leeftijd?`))
  if (leeftijd < 17) {
    leerplichtig = true
  }
}
else {
  leerplichtig = false
}
gediplomeerd = confirm(`Heb je je diploma behaald?`)
if (leerplichtig && !gediplomeerd) {
  alert(`Doorstuderen!`)
}
if (gediplomeerd || !leerplichtig) {
  alert(`Je bent gediplomeerd Of niet leerplichtig Of allebei`)
}
