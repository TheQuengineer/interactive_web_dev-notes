var message = '<h2> Browser Window </h2><p>width:'  + window.innerWidth + '</p>';
message += '<p> height: ' + window.innerHeight + '</p>';
message += '<h2> history </h2><p>items: ' + window.history.length + '</p>';
message += '<h2> screen </h2><p>width: ' + window.screen.width + '</p>';
message += '<p> height: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = message;
alert('Current page: ' + window.location);