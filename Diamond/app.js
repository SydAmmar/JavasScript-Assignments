 document.write("<pre>");
 for(var row = 2 ; row < 10; row++){
    for(var col=0 ; col <= row; col++){
        document.write("*")
    }
    document.write("*" + "<br>")
 }
 for(var row = 10 ; row > 0; row--){
    for(var col=0 ; col <= row; col++){
        document.write("*")
    }
    document.write("*" + "<br>")
 }