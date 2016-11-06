var num = parseInt(prompt("Enter Table Number"));
function table(Number){
    for(var i = 1; i <= 10; i++) { 
        var multi = Number * i;
        document.write("<center>"+"<br>"+Number + " x " + i + " = " + multi);
    } 
}
table(num);
document.getElementById("id").style.fontSize = "25px";
