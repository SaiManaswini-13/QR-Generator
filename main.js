const container = document.querySelector(".container");
const qrInput = document.getElementById("text");
const generateBtn = document.getElementById("generate");
const img = document.getElementById("qr-img");

let preInput

generateBtn.addEventListener('click',()=>{
    let input = qrInput.value.trim();

    if(!input){
        alert("This field should not be empty!!!")
        return
    } else if(input === preInput){
        alert("Value should be different from previous value!!!")
        return
    }

    else {
        preInput = input;
        generateBtn.innerText = "Generating QR Code.....";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        img.onload = function(){
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code"
        }
    }
})