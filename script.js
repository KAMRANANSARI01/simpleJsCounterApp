// getting html element
const decrementBtn= document.getElementById("dcrementBtn");
const incrementBtn= document.getElementById("incrementBtn");
const displayValue= document.getElementById("displayValue");
const resetBtn= document.getElementById("resetBtn");

// adding eventlistner in decrementBtn
decrementBtn.addEventListener("click", ()=>{
    const value = Number(displayValue.innerText);
    if (value >0){
        displayValue.innerText = value - 1;

    }else{
        alert("negative number is not allowed");
    }
});

// adding eventlistener in incrementbtn
incrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if(value >=10){
        alert("10+ number is not allowed");
    }else{
        displayValue.innerText = value + 1;
    }
});
// adding iventlistener in resetbtn
resetBtn.addEventListener("click", () =>{
    displayValue.innerText = 0;

});

