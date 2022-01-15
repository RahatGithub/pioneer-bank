//Login button event handler
const loginBtn = document.getElementById('loginBtn'); 
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})



//Deposit button event handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener("click", function(){
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    updateValue("currentDeposit", depositAmount);
    updateBalance("currentBalance", "deposit", depositAmount);
    document.getElementById('depositAmount').value = "";
})


//Withdraw button event handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    updateValue("currentWithdraw", withdrawAmount);
    updateBalance("currentBalance", "withdraw", withdrawAmount);
    document.getElementById('withdrawAmount').value = "";
})


function updateValue(id, value){
    const current = parseFloat(document.getElementById(id).innerText);
    const total = current + value;
    document.getElementById(id).innerText = total;
}


function updateBalance(id, mode, value){
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    let result;
    if(mode == "deposit"){
        result = currentBalance + value;
    }
    else if(mode == "withdraw"){
        result = currentBalance - value;
    }
    document.getElementById(id).innerText = result;
}
