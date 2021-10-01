// document.getElementById("submit").disabled=true;
var btn = document.getElementById("submit");

    if(btn!=null){
        btn.disabled=true;
    }

function check() {
    var water = document.getElementById("methodWater").checked;
    var dur = document.getElementById("duration10").checked;
    if (water && dur) {
        document.getElementById("submit").disabled=false;
    }else{
        document.getElementById("submit").disabled=true;
    }
}

// var btn = document.getElementById("submit");
// btn.onclick =  function() {
//     var choosewater = document.getElementById("methodWater").value;
//     var choose10 = document.getElementById("duration10").value;
//     var choose20 = document.getElementById("duration20").value;

//     if(choosewater=="water" && choose10=="10"){
//         window.location.href="water.html";
//     }

//     else if(choosewater=="water" && choose20=="20"){
//         window.location.href="coba.html";
//     }
// }

// Water Duration 10
document.getElementById("buttonWaterA").onclick=function change() {
    document.getElementById("plate1").src="img/water10A.gif";
}
document.getElementById("buttonWaterB").onclick=function change() {
    document.getElementById("plate1").src="img/water_10s.png";
}
document.getElementById("buttonWaterC").onclick=function change() {
    document.getElementById("plate1").src="img/plate2.jpg";
}
document.getElementById("buttonWaterD").onclick=function change() {
    document.getElementById("plate1").src="img/incubate_water.png";
}
document.getElementById("buttonWaterE").onclick=function change() {
    document.getElementById("plate1").src="img/36colonies.png";
}


alert("asedfsadfdsfsdf");



