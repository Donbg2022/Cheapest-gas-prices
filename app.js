const btn = document.querySelector('button');
const cad = document.querySelector('.cad-price')
const gallons = document.querySelector('.gallons');
const us = document.querySelector('.us-price')


const formData = {}
    gallons.addEventListener('input', e => {
    formData['gallons'] = parseFloat(e.target.value)
})

cad.addEventListener('input', e => {
    formData['Cad price'] = parseFloat(e.target.value)
})

us.addEventListener('input', e => {
    formData['Us price'] = parseFloat(e.target.value)
})
