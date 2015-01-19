var saying = 'Home sweet home ';
var message = '<h2>length</h2><p>' + saying.length + '</p>';
message += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
message += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
message += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';
message += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
message += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
message += '<h2>character index: 8-14</h2><p>' + saying.substring(8,14) + '</p>';
message += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = message;