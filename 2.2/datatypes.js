let naam = 'Carl'
let leerplichtig = true
let temparatuur = -10
let btw = 0.21 * 100
let string = '33445'
let resultaat = (parseFloat(string))
let float = 3.3445 //meerdere var met float?
let resultaat2 = float.toString()
let resultaat3 = float.toFixed(2)
var twee = 2//variabele twee ongedefineerd
let een = 1
let drie = twee + een// een + twee kan niet twee bestaat al en deze som wordt niet weergegeven omdat het niet kan
document.write('<br> Opgave 10: Datatype van naam is: ' + typeof (naam))
document.write('<br> Opgave 11: Datatype van leerplichtig is: ' + typeof (leerplichtig))
document.write('<br> Opgave 12: Datatype van temperatuur is: ' + typeof (temparatuur))
document.write('<br> Opgave 13: Waarde van btw is: ' + btw)
document.write('<br> Opgave 15: parseFloat (string) Resultaat is: ' + typeof (resultaat))
document.write('<br> Opgave 16: parseInt(float) Resultaat is: ' + typeof (resultaat2)) //2x resultaat?
document.write('<br> Opgave 17: float.toString() Rusltaat is: ' + typeof (resultaat2))
document.write('<br> Opgave 18: float.toFixed(2) Resultaat is: ' + typeof(resultaat3)) //3x resultaat?
document.write('<br> Opgave 19: Datatype var twee is: ' + typeof (twee))
document.write('<br> Opgave 20: De waarde van drie is: ' + drie)