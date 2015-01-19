var message = '<p><b>page title: </b>' + document.title + '<br />';
message += '<b>page address: </b>' + document.URL + '<br/>';
message += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = message;