const investedAmount=document.querySelector("#investedAmountinput");
const pricePerStockBought=document.querySelector("#priceperstock-boughtinput");
const pricePerStockPredict=document.querySelector("#perstockpriceinput");
const quantityDom=document.querySelector("#quantity-bought");
const total=document.querySelector("#total");
const remainingBalance=document.querySelector("#remaingBalance");
const profirPerStockPredict =document.querySelector("#profit-stock-predict");
const quantityPredict=document.querySelector("#quantity-predict");
const valuePredict=document.querySelector("#value-predict");
const profit=document.querySelector("#profit");
const profitpercentage=document.querySelector("#profitpercentage");
const netbalance=document.querySelector("#netbalance");

run()

function run(){
    investment=Number(investedAmount.value);
    ppsb=Number(pricePerStockBought.value);
    ppsp=Number(pricePerStockPredict.value);
    let quantity=Math.trunc(Number(investment/ppsb));
    quantityDom.textContent=`${quantity}`;
    total.textContent=`₹ ${inr(ppsb*quantity)}`;
    remainingBalance.textContent=`₹ ${inr(Math.trunc(investment%ppsb))}`;
    profirPerStockPredict.textContent=`₹ ${Math.trunc(ppsp-ppsb)}`;
    quantityPredict.textContent=quantity;
    valuePredict.textContent=`₹ ${inr(ppsp*quantity)}`;
    profit.textContent=`₹ ${inr((ppsp*quantity)-(ppsb*quantity))}`
    profitpercentage.textContent=`${Math.trunc((((ppsp*quantity)-(ppsb*quantity))/(ppsb*quantity))*100)}%`;
    netbalance.textContent=`₹ ${inr((ppsp*quantity)+(investment%ppsb))}/-`;
}

investedAmount.addEventListener("input",run);

pricePerStockBought.addEventListener("input",run);

pricePerStockPredict.addEventListener("input",run);


function inr(number) {
    return (number).toLocaleString('en-IN');
  }