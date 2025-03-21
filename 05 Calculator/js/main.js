const display = document.getElementById("display");

function button(button){
if (display.value != "Error!" && display.value != "undefined"){
display.value = display.value + String(button.textContent);
} else {
display.value = "";
display.value = display.value + String(button.textContent);
console.log("Deleting error");
};

}

function calculate(){
try {
 display.value = eval( display.value);
} catch {
     display.value = "Error!";
     errorFlag = 1;
}
}

function deleteNumbers(){

display.value = display.value.slice(0, -1);

}


