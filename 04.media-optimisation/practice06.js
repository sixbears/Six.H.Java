'use strict';

// affichage et cachage de la div 'Know more'
document.querySelector("#navbarDropdownMenuLink").onclick = (() =>{
    if (window.getComputedStyle(document.querySelector('#navbarDropdownMenu')).display=='none'){
        document.querySelector("#navbarDropdownMenu").style.display="block";
    } else { 
        document.querySelector("#navbarDropdownMenu").style.display="none";
    }
});

// affichage de l'annee en cours dans le footer
let today = new Date();
let year = today.getFullYear();
let footer = document.getElementById('js-current-year').innerHTML = year;

// IMC
function BMI() {
    let Weight = document.getElementById("js-bmi-weight").value;
    let Height = document.getElementById("js-bmi-height").value;
    let BMI = Weight / ((Height / 100) * (Height * 100))
     
    if(BMI < 18.5){
    alert("your BMi is"+BMI+"considered underweight" );
    }
    else if(BMI >= 18.5 && BMI <= 25){
    alert("your BMi is"+BMI+"a healthy weight" );
    }
    else if(BMI > 25){
    alert("your BMi is"+BMI+"considered overweight" );
    }
};
$("#submitbtn").click(() => {
    $("#BMIresult").style.display="block";
});

// troisieme bloc
let clickadd = 0
$("#js-ad-close").click(() => {
    clickadd += 1;
    if (clickadd === 1) {
        window.open("https://cat-bounce.com")
    } else {
        $("#js-ad").remove();
    }
    console.log(clickadd)
});