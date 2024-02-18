
function scrol(){
    const targetSction = document.getElementById('main-part');

    // scroll to the target section
    targetSction.scrollIntoView({ behavior: 'smooth' });
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    // element.disabled = true;
    element.classList.add("bg-nav-bus");
    // element.classList.add('');
}