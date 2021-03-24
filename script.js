// select the elements
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const calcButton = document.querySelector('#btn')
const output = document.querySelector('.output')

// event listeners
input1.addEventListener('keyup', calculateChange)
input2.addEventListener('keyup', calculateChange)
calcButton.addEventListener('click', calculateChange)

// function
function calculateChange() {
    let initialVal = input1.value
    let finalVal = input2.value

    let calc = (finalVal - initialVal)/ initialVal
    let result = calc * 100

    output.innerText = "Percentage change = " + result.toFixed(3) + "%"
}