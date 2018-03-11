//Opgave 56
let doorgaan = confirm(`Opgave 56: Doorgaan?`)

if (doorgaan == true) {
  var postcode = prompt(`Wat is je postcode`)
  if (postcode == `1010ST`) {
    postcode = !0 // = true
  }
  else {
    postcode = !1 // = false
  }
}
if (postcode) {
  alert(`Kans op de Postcode Loterij is 90%`)
}
if (!postcode) {
  alert(`Kans op de Postcode Loterij is 0.069%.`)
}
