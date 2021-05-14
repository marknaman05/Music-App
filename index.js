"use strict";

document.querySelector('.arrow-down').addEventListener('click', function () {
    document.querySelector('.musicUi').classList.add('hidden');
});


document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-tabs').classList.toggle('hidden1');
});