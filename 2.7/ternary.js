let wl = (d) => {document.write(d);document.write('<br>')}
//Opgave 56
let doorgaan = confirm(`Opgave 56: Doorgaan?`)

if (doorgaan == true) {
  postcode = prompt(`Wat is je postcode`)
  if (postcode == `1010ST`) {
    postcode = !""
  }
  else {
    postcode = !!""
  }
}
if (postcode){
  alert(`Kans op de Postcode Loterij is 90%`)
}
if (!postcode)[
  alert(`Kans op de Postcode Loterij is 0.069%.`)
]
