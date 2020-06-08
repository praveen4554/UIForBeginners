function validations(event){
    event.preventDefault();
    console.log('on submit event');
}

function over(){
    console.log('on mouse over');
}

function out(){
    console.log('on mouse out');
}

function focusEventTrigger(event){
    console.log(event);
   event.target.style.background = "red"
}

function blurEventTrigger(event){
    event.target.style.background = "white";
    console.log(parseInt(event.target.value) == 'NaN')
   if(isNaN(event.target.value)){
       //alert('please enter numbers only');
       event.target.focus();
   }

}

function changeEventTriggered(event){
    console.log(event.target.value);
}