
function myfunction(){
    var x = document.getElementById("myinput");
    var y = document.getElementById("show");
    var z = document.getElementById("notshow");

    if(x.type === "password"){
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
