//Opgave 42
let laptops = []
laptops ['macbook'] = {
    'model' : 'air' , 'vooraad' : 2000, 'prijs' : 1090,
}
document.write('<br> Opgave 42: laptops array aangemaakt: ' + laptops)
//Opgave 43
laptops['asusbook'] = 
{'model' : 'wind' , 'vooraad' : 1000, 'prijs' : 990,}
laptops['dellbook'] = 
{'model' : 'fire' , 'vooraad' : 987, 'prijs' : 890,}
document.write('<br> Opgave 43: laptops aray uitgebreid')
//Opgave 44
document.write('<br> Opgave 44: De laptops array heeft ' + laptops.length + 'elementen')
//Opgave 45
let mac = 'macbook' in laptops
document.write('<br> Opgave 45: De variabele mac is: ' + mac)
document.write('<br> Mac specificaties -------' + '<br> Model: ' + laptops['macbook']['model'] + '<br> Vooraad: ' + laptops['macbook']['vooraad'] + '<br> Prijs: ' + laptops['macbook']['prijs'])