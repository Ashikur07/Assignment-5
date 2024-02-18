function selectSeat(event) {
    const findButton = document.getElementById(event);
    const buttonText = findButton.innerText;

    // find the target section
    const targetSection = document.getElementById('target-section');

    // find the number of element of target section
    const numberOfElement = targetSection.children.length;
    console.log(numberOfElement);


    // decreace total seat 




    // condition check
    if (numberOfElement <= 3) {

        

        // add new element 
        const addedSeat = document.createElement('div');

        const p1 = document.createElement('p');
        p1.innerText = buttonText;
        addedSeat.appendChild(p1);

        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        addedSeat.appendChild(p2);

        const p3 = document.createElement('p');
        p3.innerText = '550';
        addedSeat.appendChild(p3);

        targetSection.appendChild(addedSeat);

        //added style 
        addedSeat.style.display = 'flex';
        addedSeat.style.justifyContent = 'space-between';


        // Button background collor set
        console.log(typeof buttonText);
        setBackgroundColorById(buttonText);




        // find the total price 
        let findTotalPrice = 550;
        findTotalPrice = findTotalPrice + (numberOfElement * 550);
        console.log(findTotalPrice);

        // Total price
        const totalPriceElement = document.getElementById('total-price');
        totalPriceElement.innerText = findTotalPrice;

        // Grand total price 
        const totalGrandPriceElement = document.getElementById('grand-total-price');
        totalGrandPriceElement.innerText = findTotalPrice;




        // decrease total seat 
        let totalSeatDecrease = document.getElementById("total-seat-count");
        let totalSeatText = totalSeatDecrease.innerText;
        let totalSeatNumber = parseInt(totalSeatText);
        totalSeatNumber = totalSeatNumber - 1;
        totalSeatDecrease.innerText = totalSeatNumber;
        console.log(totalSeatNumber);


        // increase select seat
        let totalSelectSeat = document.getElementById('select-seat-number')
        let totalSelectSeatNumber = parseInt(totalSelectSeat.innerText);
        totalSelectSeatNumber = totalSelectSeatNumber + 1;
        totalSelectSeat.innerText = totalSelectSeatNumber;



       
        // // user information section
        const submitInformation = document.getElementById('submit-information');
        submitInformation.removeAttribute('disabled');


    }


}



function cupon(){
    // console.log('ashik');
    const getCuponCode = document.getElementById('cupon-code');
    const CuponCode = getCuponCode.value;

    // get total price
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseInt(totalPriceElement.innerText);

    // get Grand - total price
    let totalGrandPriceElement = document.getElementById('grand-total-price');

    // find cupon section
    const cuponSection = document.getElementById('cupon-section');
   


    if (CuponCode == 'NEW15'){
        const discount = totalPrice * 0.15;
        totalPrice = totalPrice - discount;
        totalGrandPriceElement.innerText = totalPrice;
        cuponSection.classList.add('hidden');

    }

    else if(CuponCode == 'Couple 20'){
        const discount = totalPrice * 0.20;
        totalPrice = totalPrice - discount;
        totalGrandPriceElement.innerText = totalPrice;
    }




    // console.log(CuponCode);
}


function submitInformation(){
    const number = document.getElementById('number-value');
    const name = document.getElementById('name-value');
    const email = document.getElementById('email-value');

    number.value = '';
    name.value = '';
    email.value = '';
    
    
}