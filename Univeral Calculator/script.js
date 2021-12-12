let wageOne = document.getElementById("wage1");
let wageTwo = document.getElementById("wage2");
const netPay = document.getElementById("netPay");
const button = document.getElementById("submit");

const EntitledTo = 1721;
const perPound = 0.63 
let allowedToEarn = 293;

button.addEventListener('click', getUc)

function getUc(){

    
    if(wageOne.value > 0 && wageTwo.value > 0){
        
        let addWages = Number(wageOne.value) + Number(wageTwo.value);
        let deduction = Number(addWages) - Number(allowedToEarn);
        let takenPerPound = Number(deduction) * Number(perPound);
        let thisMonthsPayment = 1720 - Number(takenPerPound); 
        
            if(thisMonthsPayment <= 0 ){
                thisMonthsPayment = 0;
            }

        netPay.innerText = 'This Month You Are Entitled To £' + Math.floor(thisMonthsPayment)
        
    } else if ( wageOne.value > 0){

        let deduction = Number(wageOne.value) - Number(allowedToEarn);
        let takenPerPound = Number(deduction) * Number(perPound);
        let thisMonthsPayment = 1720 - Number(takenPerPound);

        
        if(thisMonthsPayment <= 0 ){
            thisMonthsPayment = 0;
        }

    netPay.innerText = 'This Month You Are Entitled To £' + Math.floor(thisMonthsPayment)
    }
        
        wageOne.value='   ';
        wageTwo.value='   ';

}












