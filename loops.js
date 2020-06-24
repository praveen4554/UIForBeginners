/**
 * based on codition on we are goint ot execute a block of code
 * if and else loop
 * 
 * if(condition){
 * 
 * } else {
 * 
 * }
 * if(condition){
 * } else if(condition){
 * } else {
 * }
 */

var a =10;
if(a != 10){
    console.log('codition is true');
} else {
    console.log('codition is false');

}

switch(a) {
    case 5: console.log('first case 5');
                break;
    case 10: console.log('first case 10');
                break;
    case 15: console.log('first case 15');
                break;
    case 20: console.log('first case 20');
                break;
    default: console.log('default case');
}

var a = [1,2,3,4,5];

// for(var i=0;i<a.length;i++){
//     console.log('value of i', i);
//     console.log('array', a[i]);
// }
//var i=4; // initailization
// while(i>=a.length){ // codition
//     console.log('value of i', i);
//     console.log('array', a[i]);
//     i++; // increment
//     }

    // do{
    //     console.log('value of i', i);
    // console.log('array', a[i]);
    // i--; 
    // } while(i>=0)

    // for(var k in a){
    //      console.log('value of k', k);
    //    console.log('array', a[k]);
    // }
    // praveen - neerap
    // var name = "praveen";
    // var result = "";

    // for(var i=name.length-1;i>=0;i--){
    //     result+=name[i];
    // }

    // console.log(result);

    // a.forEach(function(ele,index){
    //     console.log(ele);
    //     console.log(index);

    // });

//   console.log('Hello');
//   setTimeout(function(){
//       console.log('setTimeout')
//   },1000);
//   console.log('after setTimeout');
    // for(var i=0;i<4;i++) {
    //     setTimeout(function(){
    //     console.log(i);
    //     },1000);
    // }
    // console.log('after the loop',i);
    /**
     * step i=0
     */
//   for(var i=0;i<4;i++){
//     //    (function(i){setTimeout(function(){
//     //   console.log(i)
//     //    },1000)})(i);
//     printValue(i);
//   }
//   console.log('after the loop',i);
//   function printValue(i){
//         setTimeout(function(){
//       console.log(i)
//   },1000);
//   }
  /**
   * step - i=0 it will calls the for loop it has the settimeout later 4
   * step - i=1 it will calls the for loop it has the settimeout later 4
   * step - i=2 it will calls the for loop it has the settimeout later 4
   * step - i=3 it will calls the for loop it has the settimeout later 4
   * prints after the loop 4
   * 
   */
  /**
   * call stack - will pass the events - 'hello' , setTimeout, after, event to event loop execute the timeout thing
   * 
   * event loop - will execute all the satements 
   * prints - hello
   * execute and send back 
   * prints - after setTimeout
   * prints - setTimeout
   */

//    for(var k in a){
//          console.log('value of k', k);
//        console.log('array', a[k]);
//     }
//     for(var k=0;k<a.length;k++){
//          console.log('value of k', k);
//        console.log('array', a[k]);
//     }

// a.forEach(function(ele,index){
//     console.log(ele);
//     console.log('index',index);
// })
// console.log(j); // undefined
// for(var j=0;j<5;j++){

// }
// console.log(j); // 5


/**
 * var j;
 * console.log(j);// undefined
 * for(j=0;j<5;j++){
 * 
 * }
 * console.log(j);//5
 * 
 */

  console.log('Hello');
  setTimeout(function(){
      console.log('setTimeout')
  },1000);
  console.log('after setTimeout');
  /**
   * callStack - 'hello', setTimeout, 'after setTimeout', 'setTimeout'
   * event loop - it excutes 
   * prints - hello
   * prints - after settimeout
   * prints - setTimeout
   */

    for(var i=0;i<4;i++) {
      //printValue(i);
      (function(i){
          setTimeout(function(){
        console.log(i);
        },1000);
      })(i);
    }
    console.log('after the loop',i);
    function printValue(i) {
          setTimeout(function(){
        console.log(i);
        },1000);
    }
    /**
     * var will be functional scope
     * var i=0 - it will calls the setTimeout 4
     * var i=1 - it will calls the setTimeout 4
     * var i=2 - it will calls the setTimeout 4
     * var i=3 - it will calls the setTimeout 4
     * var i=4 - the loop exit
     * after the loop i = 4
     * console.log(i) - 4 - 0
     * console.log(i) - 4 - 1
     * console.log(i) - 4 - 2
     * console.log(i) - 4 - 3
     *  var i=0 - prinValue - i=0 - different memory and different scope i as local variable - 0
     *  var i=1 - prinValue - i=1 - different memory and different scope i as local variable - 1
     *  var i=2 - prinValue - i=2 - different memory and different scope i as local variable - 2
     *  var i=3 - prinValue - i=3 - different memory and different scope i as local variable - 3
     * 
     */