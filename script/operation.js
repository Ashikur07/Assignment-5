function selectSeat(event) {
    const buttonText = document.getElementById(event).innerText;
    console.log(buttonText);

    // find the target section
    const targetSection = document.getElementById('target-section');

    // find the number of element of target section
    const numberOfElement = targetSection.children.length;
    console.log(numberOfElement);


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



        // find the total price 
        let findTotalPrice = 550 ;
        findTotalPrice = findTotalPrice + (numberOfElement*550);
        console.log(findTotalPrice);

        // Total price
        const totalPriceElement = document.getElementById('total-price');
         totalPriceElement.innerText = findTotalPrice;
         console.log(totalPriceElement);

    }










}