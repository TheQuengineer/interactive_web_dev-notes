var startItem = document.getElementByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');