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
    //[10,20,30].sum(); -- 60
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

/**
 * 1. add we need to create button name called test and we are appended to body
 * 2. i need to check whether we have a button name called test 
 */
function add(){
    var buttons = document.getElementsByTagName("BUTTON");
    console.log(buttons);
    for(var i=0;i<buttons.length;i++){
       if(buttons[i].innerHTML === 'TEST')
          break;
    }
    if( i === buttons.length) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "TEST";
    btn.setAttribute('class','test');
    btn.addEventListener("click",function(){
        test();
    });
    document.getElementsByTagName("body")[0].appendChild(btn);
    } else {
        buttons[buttons.length-1].remove();
    }
    // if(document.getElementsByTagName("BUTTON").length === 4){
    //  var btn = document.createElement("BUTTON");
    // btn.innerHTML = "TEST";
    // btn.addEventListener("click",function(){
    //     test();
    // });
    // document.getElementsByTagName("body")[0].appendChild(btn);
    // } 
}

function remove(){
    console.log(document.querySelector("body > .test"))
    for(var i=0;i< document.querySelectorAll(".child > a").length; i++){
        document.querySelectorAll(".child > a")[i].style.color = "red";
    }
   // document.querySelector(".child > a").style.color = "red";
   // document.getElementsByTagName("BUTTON")[4].remove();
}

/**
 * 1. document.getElementById - single node
 * 2. document.getElementByClassName - Array of nodes
 * 3. document.getElementByTagName - Array of nodes
 * 4. document.querySelector - single of node
 * 5. document.querySelectorAll - Array of nodes
 */