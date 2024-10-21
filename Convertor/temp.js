// document.getElementById('btn').addEventListener('click', function(event){
//     event.preventDefault();


//Converting celsius to fahrenheit

function celsiusToFahrenheit(celsius){
    let val1=(celsius*9/5)+32;
    return val1;

}

//Converting fahrenheit to celsius

function fahrenheitToCelsius(fahrenheit){
    let val2=(fahrenheit - 32)*5/9;

}

//Handling conversion

function newFunction(input,conversionDirection){
    if(conversionDirection === "CTF"){
        return celsiusToFahrenheit(input);
    }

    else if(conversionDirection ==="FTC"){
        return fahrenheitToCelsius(input);
    }

}

//Onclick function
function convert(){
    let input =parseFloat(document.getElementById("temperature").value);
    let direction=document.querySelector('input[name="conversion"]:checked').value;


let result = newFunction(input,direction);
if(direction === "CTF"){
    document.getElementById("result").innerHTML=`${input} C is ${result.toFixed(2)} F`;
}
else if(direction === "FTC"){
    document.getElementById("result").innerHTML=`${input} F is ${result.toFixed(2)} C`;
}
}
// });