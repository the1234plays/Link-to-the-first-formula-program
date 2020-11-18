// Program 
document.getElementById('mainbtn').addEventListener('click', calBtn);
//Event Function
function calBtn() {
    // Input
    let num1 = Number (document.getElementById('num1').value);
    let num2 = Number (document.getElementById('num2').value);
    let num3 = Number (document.getElementById('num3').value);

    // Proccess
    let total = (num1 + num2 + num3)/3

    // Output
    document.getElementById('message').innerHTML = total;

}