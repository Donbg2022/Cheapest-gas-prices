
//create elements to use when adding event listeners
const btn = document.querySelector('button');
const cad = document.querySelector('.cad-price');
const gallons = document.querySelector('.gallons');
const us = document.querySelector('.us-price');
const p = document.querySelector('#end')

//object to push the user inputs into
const formData = {};
//for loop to iterate through the possible input entries and add to the formData
for (let input of [ gallons, cad, us ]) {
    input.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value
})
 }
// function that is called on the convert button to do the math and display the projections
btn.addEventListener('click', function () {
  const gToL = formData.usGallon * 3.78541;
  const canPrice = formData.canAmount * gToL;
  const usPrice = formData.usGallon * formData.usAmount * 1.34;
  //create h3 and append to present the price in CAD
  const h3 = document.createElement('h3');
  const secondH3 = document.createElement('h3');
  p.append(h3, secondH3);
  h3.innerText = `the canadian price for the gas is ${canPrice}`;
  secondH3.innerText = `the price of gas in canadian if purchased in usa ${usPrice}`;


  
})


// //to do 
// -make the h3 elemnts add after the button instead of appending. 
// -posisbly make convert button disapear?
// -inport api to monitor live cad to usd conversion 