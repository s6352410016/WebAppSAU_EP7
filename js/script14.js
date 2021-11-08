const yrname = document.querySelector("#yrname");
const showname = document.querySelector("#showname");
function showNameAlert(){
   alert(yrname.value);
}
function showName(){
    showname.innerHTML = yrname.value;
}
function notShowName(){
    showname.innerHTML = "???";
}

const yrbyear = document.querySelector("#yrbyear");
const showage = document.querySelector("#showage");
document.querySelector("#clickB").onclick = () => {
    const age = new Date().getFullYear() - Number(yrbyear.value);
    showage.innerHTML = age;
}

const yrsexm = document.querySelector("#yrsexm");
const yrsexf = document.querySelector("#yrsexf");
const showsex = document.querySelector("#showsex");
document.querySelector("#clickC").onclick = () => {
    yrsexm = yrsexm.checked == true ? showsex.innerHTML = yrsexm.value : showsex.innerHTML = yrsexf.value;
}