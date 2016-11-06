document.write("<pre>");
var limit = Number(prompt("Enter Fibonacci Num"));
var first = 0;
var second = 1;
var next;
for(var i = 0; i < limit; i++) {
    if(i == 0) {
        document.write(first + "<br>");
        continue;
    }
    if (i == 1) {
        document.write(second + "<br>");
        continue;
    }
    next = first + second;
    first = second;
    second = next;
    document.write(next + "<br>");
}