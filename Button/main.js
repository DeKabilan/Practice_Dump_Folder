function hidebutton1() {
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "visible";
    ("Hello World!")
}

function random(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

function hidebutton2() {
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button1").style.visibility = "visible";
}

function changecolorofbutton1(){
    document.getElementById("button2").style.backgroundColor = "#"+random(000000,999999);

}
function changecolorofbutton2(){
    document.getElementById("button1").style.backgroundColor = "#"+random(000000,999999);
    

}

