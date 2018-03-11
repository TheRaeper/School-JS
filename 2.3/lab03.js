//1
let testarray = ['een','twee','3','vier']
//2
testarray.push('5')
//3
document.write('<br>3: ' + testarray)
//4
document.write('<br>4: ' + typeof testarray[4])
//5
delete testarray[4]
//6
document.write('<br>6: ' + testarray)
//7
testarray.unshift('nul')
//8
document.write('<br>8: ' + testarray)
//9
let index = testarray.indexOf('een')
delete index[0]
//10
document.write('<br>10: ' + typeof index[0])
//11
delete testarray[0]
//12
document.write('<br>12: ' + testarray)
//13
delete testarray[2]
//14
document.write('<br>14: ' + testarray)
//15
delete testarray[4]
//16
document.write('<br>16: ' + testarray)