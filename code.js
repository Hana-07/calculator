const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";

//define function to calculate based on button clicked. 
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        //if output has '%' , replace with /100 before evaluating.
        output = eval(output.replace("%" , "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DE") {
        //if this is clicked delete last number
        output = output.toString().slice(0, -1);
    } else {
        //if button is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
