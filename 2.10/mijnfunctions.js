const wl = (d) => {document.write(d);document.write(`<br>`)}

//opgave 59
const verdubbel = (inputgetal) =>
  (typeof inputgetal == 'number') ? // check if "inputgetal" is a number,
    inputgetal * 2 : // if so return that times 2
    0  // if "inputgetal" is not a number return 0 (I think it's better to return a 0 because if you want to use the value later you are shure its a number)

//opgave 60
const afmelden = () =>
  confirm(`Wilt u zich afmelden?`) ? // if the ouput of the funciton: confirm is true
    alert(`U wordt afgemeld!!!`) : // alert the user: `U wordt afgemeld!!!`
    alert('U bent niet afgemeld.') // if the output of the first funciton is false alert: 'U bent niet afgemeld.

//opgave 61
let mijngetal = prompt(`Typ getal in`)
let resultaat = verdubbel(mijngetal)
wl(`Input-getal: ${mijngetal}`)
wl(`Output-getal: ${resultaat}`)
afmelden()

//opgave 62
const begroeten = Date.now()
let uur = begroeten.getHours() // what is getHours ???

if (uur >= begroeten.getHours(0) <= begroeten.getHours(11)) {
  wl(`Goedemorgen`)
} else if (uur >= begroeten.getHours(12) && uur <= begroeten.getHours(17)) { // there is something called a if else you know :D
  wl(`Goedemiddag`)
} else {
  wl('Goedenavond')
}


// a small tip

// the es5 funtion:
// function1 (input) {
//   return `some value: ${input}`
// }

// the es6 arrow funciton:
// const function2 = (input) => {
//   return `some value: ${input}`
// }

// the es6 way also allows you to do this:
// const also can be let
// const function3 = (input) => `some value: ${input}`

// commented it all out because 