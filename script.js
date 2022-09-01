const initialPrice = document.querySelector("#initial-price");
const total = document.querySelector("#total-stock");
const currentPrice = document.querySelector("#current-price");

const button = document.querySelector("#button");

const output = document.querySelector("#output");

function calculateProfitOrLoss() {
  const ip = initialPrice.value;
  const qty = total.value;
  const cp = currentPrice.value;
  calculate(ip, cp, qty);
}

function calculate(initial, current, quantity) {
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss / initial) * 100;

    ShowMessage(
      `Hey!! Your total loss is ${loss}, and the LossPercentage is ${lossPercentage.toFixed(
        2
      )}% 😔😔😔`
    );
  } else if (current > initial) {
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit / initial) * 100;
    ShowMessage(
      `Hey Your profit is ${profit} and ProfitPercentage is ${profitPercentage.toFixed(
        2
      )}%🥳🥳🥳`
    );
  } else {
    ShowMessage(`No Pain No Gain And No Gain And No Pain😐😐`);
  }
  //   console.log(ShowMessage);
}

function ShowMessage(message) {
  output.innerText = message;
}
button.addEventListener("click", calculateProfitOrLoss);
