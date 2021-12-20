const initialPrice = document.querySelector("#initial-price");
const total = document.querySelector("#total-stock");
const currentPrice = document.querySelector("#current-price");

const button = document.querySelector("#button");

const output = document.querySelector("#output");

function calculateProfitOrLoss(){
    const ip = initialPrice.value;
    const qty = total.value;
    const cp = currentPrice.value
    calculate(ip,cp,qty);
}


function calculate(initial,current,quantity){
    if(initial > current){
        const loss = (initial-current)* quantity
        const lossPercentage = loss / initial * 100;
       ShowMessage(`total loss is ${loss}, and the percentage is ${lossPercentage}% `);
    }
    else if(current > initial){
        const profit = (current - initial) * quantity;
        const profitPercentage = profit / initial * 100
        ShowMessage(`Hey profit is ${profit} and percentage is ${profitPercentage}%`);
    }else{
        ShowMessage(`No Pain No Gain And No Gain And No Pain`)
    }


}

function ShowMessage(message){
    output.innerText = message;
   

}




button.addEventListener("click", calculateProfitOrLoss);
