// welcome message
var user = 'Keontay';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Joystick reviews.';
var greetingEl = document.getElementById('greeting');

greatingEl.textContent = greeting;

// product price
var price = 155.99,
studentDiscount = 0,
studentPrice = price - (price * studentDiscount),
priceEl = document.getElementById('price'),
studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

