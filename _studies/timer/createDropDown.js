let selectMin = document.getElementById("select-min");
let selectSec = document.getElementById("select-sec");

for(let i=0;i<100;i++) {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.innerHTML = i;
    selectMin.appendChild(newOption);
}

for(let i=0;i<60;i++) {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.innerHTML = i;
    selectSec.appendChild(newOption);
}

selectMin.options[0].selected = true;
selectSec.options[0].selected = true;