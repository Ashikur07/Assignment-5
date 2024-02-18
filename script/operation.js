// seat related operation (maximum)
function selectSeat(event) {
    const findButton = document.getElementById(event);
    const buttonText = findButton.innerText;

    // call find the number of innerChild function to get value
    const numberOfElement = innerChildNumber('target-section')

    // condition check
    if (numberOfElement <= 3) {

        // call the function and append child
        appendNewChild('target-section', buttonText);

        // Button background collor set
        setBackgroundColorById(buttonText);

        // set total price
        setTotalPrice('total-price', numberOfElement);

        // set grand Total price
        grandTotalPrice('grand-total-price', 'total-price')

        // decrease total seat
        totalSeatDecrease('total-seat-count');

        // increase select seat
        increaseSelectSeat('select-seat-number');

        // Enable Net button
        const submitInformation = document.getElementById('submit-information');
        submitInformation.removeAttribute('disabled');
    }

}



function cupon() {

    const getCuponCode = document.getElementById('cupon-code');
    const CuponCode = getCuponCode.value;

    // get total price
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseInt(totalPriceElement.innerText);

    // get Grand - total price
    let totalGrandPriceElement = document.getElementById('grand-total-price');

    // find cupon section
    const cuponSection = document.getElementById('cupon-section');

    if (CuponCode == 'NEW15') {
        const discount = totalPrice * 0.15;
        totalPrice = totalPrice - discount;
        totalGrandPriceElement.innerText = totalPrice;
        cuponSection.classList.add('hidden');
    }

    else if (CuponCode == 'Couple 20') {
        const discount = totalPrice * 0.20;
        totalPrice = totalPrice - discount;
        totalGrandPriceElement.innerText = totalPrice;
        cuponSection.classList.add('hidden');
    }

}
