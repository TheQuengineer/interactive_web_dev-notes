var originalNumber = 10.23456;

var message = '<h2> original number </h2><p>' + originalNumber + '</p>';
message += '<h2> toFixed()</h2><p>' + originalNumber.toFixed(3) + '</p>';
message +='<h2> toPrecision() </h2><p>' + originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML = message;

