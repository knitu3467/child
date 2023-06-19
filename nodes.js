// Select the parent element
var parentElement = document.getElementById('parentElementId');

// Create a new text node with "Hello"
var helloTextNode = document.createTextNode('Hello ');

// Create a new element
var newElement = document.createElement('span');
newElement.textContent = 'Item Lister';

// Add the "Hello" text node before the "Item Lister" element
parentElement.insertBefore(helloTextNode, newElement);

// Create another new text node with "Hello"
var helloTextNode2 = document.createTextNode('Hello ');

// Create another new element
var newElement2 = document.createElement('span');
newElement2.textContent = 'Item 1';

// Add the "Hello" text node before the "Item 1" element
parentElement.insertBefore(helloTextNode2, newElement2);
