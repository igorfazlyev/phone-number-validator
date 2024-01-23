const userInput = document.getElementById('user-input')
const checkButton = document.getElementById('check-btn')
const clearButton = document.getElementById('clear-btn')
const results = document.getElementById('results-div')

clearButton.addEventListener('click', ()=>{
    results.textContent = ""
})

checkButton.addEventListener('click', ()=>{
    if (userInput.value === "") {
        alert('Please provide a phone number')
        return
    }
    const phoneRegex = /^(1[ -]?)?(\(\d{3}\)|\d{3})[ -]?(\d{3})[ -]?(\d{4})$/    ;
    if (userInput.value.trim().match(phoneRegex)) {
        results.textContent = `Valid US number: ${userInput.value}`
    }else{
        results.textContent = `Invalid US number: ${userInput.value}`
    }
    
})