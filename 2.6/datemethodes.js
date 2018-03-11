let maanden =  ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december']
let weekdag = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag']
let vandaag = new Date()
document.write(`
<br>Vandaag is 
dag: <b>${ weekdag[vandaag.getDay()] }</b>, 
maand: <b>${ maanden[vandaag.getMonth()] }</b>, 
Jaar: <b>${ vandaag.getFullYear() }</b>`)
