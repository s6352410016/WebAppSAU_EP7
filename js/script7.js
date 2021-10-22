
const btnOk = document.querySelector("#btnOk");


btnOk.onclick = () => {
    multipyTable();
}

const multipyTable = () => {
    let num = document.querySelector("#num").value;
    let showResult = '';
    for(let i = 1; i <= 12; i++){
        showResult += num + 'x' + i + '=' + (num * i) + '<br>';
    }
    document.querySelector("#show").innerHTML = showResult;
}
