document.getElementById("addText").innerHTML = "<p>Praveen</p>"

// console.log(document.getElementsByTagName("div"));
// for(var i=0;i<document.getElementsByTagName("div").length;i++){
//     document.getElementsByTagName("div")[i].style.color = "red";
// you need to check whether it contains a button which has name test or not 
// if it is not you need to add it and if it is available you need to remove it
// }
function test() {
    console.log('added event');
}
function changeColor() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "NEW";
    btn.addEventListener("click",function(){
        test();
    });

   // btn.addEventListener("click",test);
    // document.getElementById("new").appendChild(btn);
    // removeChild
    document.getElementsByTagName("body")[0].appendChild(btn);

    for(var i=0;i<document.getElementsByTagName("div").length;i++) {
        if(document.getElementsByTagName("div")[i].style.color == "red"){
             document.getElementsByTagName("div")[i].style.color = "black";
             document.getElementsByTagName("div")[i].removeAttribute('class');
        } else {
        document.getElementsByTagName("div")[i].setAttribute('class','test');
            document.getElementsByTagName("div")[i].style.color = "red";
        }
    }
}