//Opgave 24
let studenten = ['Zakaria', 'Albert', 'Hamsa', 'Mike', 'Pieter']
document.write('<br> Opgave 24: Studenten: '+ studenten)
//Opgave 25
let team = studenten
document.write('<br> Opgave 25: Team: ' + team)
//Opgave 26
team[0] = 'Umut'
document.write('<br> Opgave 26: Element[0] is gewijzigd: ' + studenten)
//Opgave 27
studenten.shift()
document.write('<br> Opgave 27: Resultaat van shift: ' + studenten)
//Opgave 28
studenten.unshift('Jozef','Umut')
document.write('<br> Opgave 28: Resultaat van unshift: ' + studenten)
//Opgave 29
studenten.pop()
document.write('<br> Opgave 29: Resultaat van pop: ' + studenten)
//Opgave 30
studenten.push('Pieter','David')
document.write('<br> Opgave 30: Resultaat van push: ' + studenten)
//Opgave 31
let klas = studenten.splice(2,4)
document.write('<br> Opgave 31: Resultaat <br>  studenten: ' + studenten +'<br> klas: '+ klas)
//Opgave 32
studenten.sort()
document.write('<br> Opgave 32: Resultaat van sort: ' + studenten)
//Opgave 33
studenten.reverse()
document.write('<br> Opgave 33: Resultaat van reverse: ' + klas)
//Opgave 34
let index = studenten.indexOf('Jozef')
document.write('<br> Opgave 34: Resultaat van indexOf: ' + index)
//Opgave 35
delete klas[2]
document.write('<br> Opgave 35: Resultaat van delete: ' + klas)
//Opgave 36
document.write('<br> Opgave 36; Datatype van gedelete element is: ' + typeof klas[2])
//Opgave 37
klas.splice(2,1)
document.write('<br> Opgave 37: Element voledig verwijderd: ' + klas)
//Opgave 38
index = studenten.indexOf('Jozef')
studenten.splice(index,1)
document.write('<br> Opgave 38: Specifieke student verwijderd: ' + studenten)
//Opgave 39
klas = klas.slice()
document.write('<br> Opgave 39: Resultaat van kopieren: ' + klas)
//Opgave 40
let myString = klas.join('|')
document.write('<br> Opgave 40: Resultaat van join: ' + myString)
//Opgave 41
let myArray = myString.split('|')
document.write('<br> Opgave 41: Resultaat van split: ' + myArray)