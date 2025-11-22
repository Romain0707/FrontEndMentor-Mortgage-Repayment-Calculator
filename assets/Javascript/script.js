const resultsPending = document.getElementById('resultsPending')
const results = document.getElementById('results')
const calculate = document.getElementById('calculate')
const interestLabel = document.getElementById('interest-label')
const repaymentLabel = document.getElementById('repayment-label')
const repaymentChecked = document.getElementById('repayment')
const interestChecked = document.getElementById('interest')
const input = document.querySelectorAll('input[type=number]')
console.log(input)
calculate.addEventListener('click', changeRightDiv)

function changeRightDiv() {
    if(resultsPending.classList.contains('flex') && results.classList.contains('hidden')) {
        resultsPending.classList.remove('flex')
        resultsPending.classList.add('hidden')
        results.classList.remove('hidden')
        results.classList.add('block')
    } else {
        resultsPending.classList.add('flex')
        resultsPending.classList.remove('hidden')
        results.classList.add('hidden')
        results.classList.remove('block')
    }
}

calculate.addEventListener('click', 
    function(event) {
        event.preventDefault()
        input.forEach( element => 
            checkNotEmpty(element))
})


function validate() {
    if(repaymentChecked.checked) {
        repaymentLabel.classList.remove('border-slate-700')
        repaymentLabel.classList.add('border-lime')
        repaymentLabel.classList.add('bg-lime-100')
    }  
    if(interestChecked.checked) {
        interestLabel.classList.remove('border-slate-700')
        interestLabel.classList.add('border-lime')
        interestLabel.classList.add('bg-lime-100')
    }
    if(!repaymentChecked.checked) {
        repaymentLabel.classList.add('border-slate-700')
        repaymentLabel.classList.remove('border-lime')
        repaymentLabel.classList.remove('bg-lime-100')
    }
    if(!interestChecked.checked) {
        interestLabel.classList.add('border-slate-700')
        interestLabel.classList.remove('border-lime')
        interestLabel.classList.remove('bg-lime-100')
    }
}

input.forEach(input => {
    input.addEventListener('input', function(event) {
        checkNotEmpty(event.target)
    })
})

function checkNotEmpty(input) {
    if(input.value == "") {
        input.classList.remove('border-slate-700')
        input.classList.add('border-red')
        input.nextElementSibling.classList.remove('bg-slate-100')
        input.nextElementSibling.classList.add('bg-red')
        input.nextElementSibling.classList.remove('text-slate-700')
        input.nextElementSibling.classList.add('text-white')
        input.nextElementSibling.nextElementSibling.classList.remove('hidden')
    } else {
        input.classList.add('border-slate-700')
        input.classList.remove('border-red')
        input.nextElementSibling.classList.add('bg-slate-100')
        input.nextElementSibling.classList.remove('bg-red')
        input.nextElementSibling.classList.add('text-slate-700')
        input.nextElementSibling.classList.remove('text-white')
        input.nextElementSibling.nextElementSibling.classList.add('hidden')
    }
}