var pass = 45;
var score = 75;
var msg;

if (score >= pass) {
	msg = 'Congratulations, you passed!';
} else {
	msg = 'Have another go.';
}

var el = document.getElementById('answer');
el.textContent = msg;