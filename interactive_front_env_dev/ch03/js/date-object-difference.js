var today = new Date();
var year = today.getFullYear();
var east = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime(); - east.getTime();
difference = (difference / 31556900000);

var elmessage = document.getElementById('message');
elmessage.textContent = Math.floor(difference) + ' years of online travel advice';
