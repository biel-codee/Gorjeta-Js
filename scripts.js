function calculateTip(event) {
    event.preventDefault();
    console.log(event);
   
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numbOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
    alert("Por favor, preencha os valores")
    return;
    }

    if(numbOfPeople == " " | numbOfPeople <= 1) {
        numbOfPeople == 1;
        document.getElementById('each').style.display ="none" 
    } else {
    document.getElementById('each').style.display ="block" 
    }

    let total = (bill * serviceQual) / numbOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = 'block';
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit',calculateTip);