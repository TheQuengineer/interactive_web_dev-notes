var scores = [24, 32, 17, 39, 45, 50, 66, 12, 22, 13, 43, 42];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for (i = 0; i < arrayLength; i++) {
	roundNumber = (i + 1);
	msg += 'Round ' + roundNumber + ': ';
	msg += scores[i] + '<br/>';
}

document.getElementById('answer').innerHTML = msg;