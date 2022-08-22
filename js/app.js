document.getElementById('btn-generate').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})


function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('4 digit pin not found, found: ', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    const previousTypednumber = typedNumber.value;

    if (isNaN(number) == false) {
        // console.log(number);
        typedNumber.value = previousTypednumber + number;
    }
    else {
        if (number == 'C') {
            typedNumber.value = '';
        }
        else if (number == '<') {
            const digits = previousTypednumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumber.value = remainingDigits;
        }
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage =  document.getElementById('pin-success');
    const pinFailedMessage = document.getElementById('pin-failed');
    
    if (currentPin === typedNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailedMessage.style.display = 'none';
    }
    else {
        pinFailedMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
