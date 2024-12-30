let value = document.getElementById("counter-value");


function onIncrement(){
    let prevvalue = value.textContent
    let updatevalue = parseInt(prevvalue) + 1;
    if (updatevalue > 0){
        value.style.color="green";
    }
    else if (updatevalue < 0) {
        value.style.color = "red";
    }
    else {
        value.style.color = "black";
    }
    value.textContent = updatevalue;
}

function onDecrement(){
    let prevvalue = value.textContent
    let updatevalue = parseInt(prevvalue) - 1;
    if (updatevalue < 0){
        value.style.color="red";
    }
    else if (updatevalue < 0) {
        value.style.color = "green";
    }
    else {
        value.style.color = "black";
    }
    value.textContent = updatevalue;
}

function onReset(){
    let countervalue=0;
    value.textContent=countervalue;
    value.style.color = "skyblue";
}
