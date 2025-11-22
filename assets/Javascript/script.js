const resultsPending = document.getElementById('resultsPending')
const results = document.getElementById('results')
const calculate = document.getElementById('calculate')
const interestLabel = document.getElementById('interest-label')
const repaymentLabel = document.getElementById('repayment-label')
const repaymentChecked = document.getElementById('repayment')
const interestChecked = document.getElementById('interest')
const input = document.querySelectorAll('input[type=text]')
const clearAll = document.getElementById('clear-all')
const totalResult = document.getElementById('result')
const repayTotalResult = document.getElementById('repayResult')
let count = 0

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

calculate.addEventListener('click', function(event) {
    event.preventDefault()
    input.forEach( element => {
        checkNotEmpty(element)
    })
    if(!repaymentChecked.checked && !interestChecked.checked) {
        document.getElementById('radio-alert').classList.remove('hidden')
    }
    if(input.forEach(element => element.value) != "" && repaymentChecked.checked || interestChecked.checked) {
        let values = []
        input.forEach( element => {
            const inputValue = Number(element.value)
            values.push(inputValue)
        })
        let result = (((values[2] / 100 / 12) * values[0]) / (1 - ((1 + (values[2] / 100 / 12)) ** (0 - values[1] * 12))))
        let repayResult = (result * 12 * values[1])
        repayTotalResult.textContent = new Intl.NumberFormat("en-EN", { style: "currency", currency: "GBP" }).format(repayResult)
        totalResult.textContent = new Intl.NumberFormat("en-EN", { style: "currency", currency: "GBP" }).format(result)
        if(count <= 0) {
            changeRightDiv()
            count++
        }
    }
})


function validate() {
    if(repaymentChecked.checked) {
        repaymentLabel.classList.remove('border-slate-700')
        repaymentLabel.classList.add('border-lime')
        repaymentLabel.classList.add('bg-lime-100')
        document.getElementById('radio-alert').classList.add('hidden')
    }  
    if(interestChecked.checked) {
        interestLabel.classList.remove('border-slate-700')
        interestLabel.classList.add('border-lime')
        interestLabel.classList.add('bg-lime-100')
        document.getElementById('radio-alert').classList.add('hidden')
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


clearAll.addEventListener('click', function () {
    input.forEach(input => {
        input.value = ""
    })
    repaymentChecked.checked = false
    interestChecked.checked = false
    interestLabel.classList.add('border-slate-700')
    interestLabel.classList.remove('border-lime')
    interestLabel.classList.remove('bg-lime-100')
    repaymentLabel.classList.add('border-slate-700')
    repaymentLabel.classList.remove('border-lime')
    repaymentLabel.classList.remove('bg-lime-100')
    const fieldAlert = document.querySelectorAll('.field-alert')
    fieldAlert.forEach(element => {
        element.classList.add('hidden')
    })
    input.forEach(input => {
        input.classList.add('border-slate-700')
        input.classList.remove('border-red')
        input.nextElementSibling.classList.add('bg-slate-100')
        input.nextElementSibling.classList.remove('bg-red')
        input.nextElementSibling.classList.add('text-slate-700')
        input.nextElementSibling.classList.remove('text-white')
    })
})
