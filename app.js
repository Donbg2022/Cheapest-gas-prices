const btn = document.querySelector('button');
const cad = document.querySelector('.cad-price');
const gallons = document.querySelector('.gallons');
const us = document.querySelector('.us-price');
const formData = {};

for (let input of [ gallons, cad, us ]) {
    input.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value
})
 }