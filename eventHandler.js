function grandChild(event){
   // event.stopPropagation();
    event.stopImmediatePropagation();
    console.log('grandChild');
}
function child(){
    console.log('Child');
}

function parent(){
    console.log('parent');
}