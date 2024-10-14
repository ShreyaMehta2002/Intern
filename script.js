document.getElementById('calculate').addEventListener('click',function(event){//declaring what function the calculate button performs
    event.preventDefault();

let val1 =parseInt(document.getElementById('val1').value); //extracting value of val1 from id - val1
let val2 =parseInt(document.getElementById('val2').value); //extracting value of val2 from id - val2

let operator =document.getElementById('operator').value; //extracting value of operator from id - operator

let finalResult =document.getElementById('result');

let result;

switch(operator){
    case '+':
        result = val1 + val2;
        break;

        case '-':
            result=val1-val2;
            break;

            case'*':
            result = val1 * val2;
            break;

            case '/':
                result = val1/val2;
                break;

                default:
                    finalResult.innerHTML=`Invalid operator.Please use (+,-,*,/)`;
};
// if(operator == '+'){
//     result = val1+val2;
// }
// else if(operator == '-'){
//     result =val1-val2;

// }
// else if(operator == '*'){
//     result = val1*val2;
// }
// else if(operator == '/'){
//     result = val1/val2
// }
// alert("Result is :" + result)

//Displaying result
finalResult.innerHTML=`The result is : ${result}`; //using template literal

});