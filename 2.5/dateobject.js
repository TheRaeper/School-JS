 //Opgave 46
vandaag = new Date()
document.write('<br> Opgave 46: ' + vandaag)
//Opgave 47
nu = Date.now()
eenDag = 86400000;
morgen = new Date(nu + eenDag)
document.write('<br> Opgave 47: De datum van morgen is: ' + morgen)
//Opgave 48
    //datum met string
schooljaar = new Date('2015-09-04')
    //datum met datum en tijd string
wintertijd = new Date('2015-10-28T03:00:00')
document.write('<br> Opgave 48: Begin wintertijd is: ' + wintertijd)
//Opgave 49
beginschooldag = new Date(2015,8,9,8,30)
document.write('<br> Opgave 49: Begin schooldag: ' + beginschooldag)
//Opgave 50
nu = Date.now()
document.write('<br> Opgave 50: Nu: ' + nu)
dagen = ((nu -beginschooldag) / eenDag)
document.write('<br> Aantal dagen sinds begin schooldag: ' + dagen.toFixed(0))