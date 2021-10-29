const btnOk = document.querySelector("#btnOk");
btnOk.onclick = () => {
    let num = document.querySelector("#num").value;
    let showResult = '';
    for(let i = 1; i <= 12; i++){
        showResult += num + 'x' + i + '=' + (num * i) + '<br>';
    }
    document.querySelector("#show").innerHTML = showResult;
}