//2
let palet = ['green','red','yellow','pink','orange']
//3
document.write('<br>3 palet is nu: ' + palet)
//4
let nieuwekleur = prompt('Typ een nieuwe kleur in: ')
//5
palet.push(nieuwekleur)
//6
document.write('<br>6 palet is nu: ' + palet)
//7
nieuwekleur = prompt('Typ een nieuwe kleur in: ')
//8
palet.unshift(nieuwekleur)
//9
document.write('<br>9 palet is nu: ' + palet)
//10
palet.sort()
//11
document.write('<br>11 palet is nu: ' + palet)
//12
let palet2 = palet.splice(4,6)
//13
document.write('<br>13 palet is nu: ' + palet)
//14
document.write('<br>14 palet2 is nu: ' + palet2)
//15
let palet3 = palet.slice()
//16
document.write('<br>16 palet3 is nu: ' + palet3)