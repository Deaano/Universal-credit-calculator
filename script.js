let wageOne = document.getElementById("wage1");
let wageTwo = document.getElementById("wage2");
const netPay = document.getElementById("netPay");
const button = document.getElementById("submit");
let entitled = document.getElementById("entitledTo");
let allowedToEarn = document.getElementById("A-T-E");
let perPound = document.getElementById("D-P-P");


// on button press to get results 
button.addEventListener('click', getUc)

// press enter to get results
document.addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
        getUc();
    }
})

// get Results if veriables are equal to my variables 
function getUc(){

     if (wageOne.value > 0 && wageTwo.value > 0){
        
        let addWages = Number(wageOne.value) + Number(wageTwo.value);
        let deduction = Number(addWages) - Number(allowedToEarn.value);
        let takenPerPound = Number(deduction) * Number(perPound.value);
        let thisMonthsPayment = Number(entitled.value) - Number(takenPerPound); 
        
            if(thisMonthsPayment <= 0 ){
                thisMonthsPayment = 0;
            }

        netPay.innerText = 'This Month You Are Entitled To £' + Math.floor(thisMonthsPayment)
        
        } else if ( wageOne.value > 0){

        let deduction = Number(wageOne.value) - Number(allowedToEarn.value);
        let takenPerPound = Number(deduction) * Number(perPound.value);
        let thisMonthsPayment = Number(entitled.value) - Number(takenPerPound);

            if(thisMonthsPayment <= 0 ){
                thisMonthsPayment = 0;
        }

        netPay.innerText = 'This Month You Are Entitled To £' + Math.floor(thisMonthsPayment)
    
        } else if (allowedToEarn.value <= 0 || entitled.value <= 0 || perPound.value <= 0 || wageOne.value <= 0 || wageTwo.value <= 0){
    
        netPay.innerText = 'Please Fill In All Required Fields.'
        
    }
        // return original values

        wageOne.value='';
        wageTwo.value='';
        entitled.value='';
        perPound.value='';
        allowedToEarn.value='';

}












