//Opgave 21
var weekdag = []
weekdag.push('maandag')
weekdag.push('dinsdag')
weekdag.push('woensdag')
weekdag.push('donderdag')
weekdag.push('vrijdag')
console.log(weekdag)
//Opgave 23
var team = []
team.push({
    teamnaam: 'team1',
    wedstrijden: [1,2,3]
})
team.push({
    teamnaam: 'team2',
    wedstrijden: [4,5,6]
})
team.push({
    teamnaam: 'team3',
    wedstrijden: [7,8,9]
})
team[0].wedstrijden[0] = 'hoi'
console.log(team)
//Opgave 21
document.write("<br> Opgave 21: Array aangemaakt") 
//Opgave 22
document.write("<br> Opgave 22: Elementen aangemaakt")
//Opgave 23
document.write("<br> Opgave 23: weekdag array: " + weekdag)
document.write("<br> Eerste element in array is: " + weekdag[0])
for (let index = 0; index < team.length; index++) {
    document.write("<br> Doelpunten van " + team[index].teamnaam + ': ' + team[index].wedstrijden[0] + ' ' + team[index].wedstrijden[1] + ' ' + team[index].wedstrijden[2])
}