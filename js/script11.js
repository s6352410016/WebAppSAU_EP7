const btnCal = document.querySelector('#btnCal');
const btnCancel = document.querySelector('#btnCancel');
const showSum = document.querySelector('#showSum');

btnCal.onclick = () => {   
    let sum = Number(document.querySelector('#money').value) / Number(document.querySelector('#person').value);
    showSum.innerHTML = sum.toFixed(2);
    if(document.querySelector('#money').value.trim().length == 0){
        alert('ป้อนเงินด้วย');
    }
    else if(document.querySelector('#person').value.trim().length == 0){
        alert('ป้อนจำนวนคนด้วย');
    }
}

btnCancel.onclick = () => {
    document.querySelector('#money').value = "";
    document.querySelector('#person').value = "";
    showSum.innerHTML = "0.00";
}