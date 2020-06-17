
// var a = 10;
// function test(){
//     if( a == 10){
//      //   console.log('test');
//         return a;
//     }
//    // console.log(a); //10 undefined 10
// }

// // test();

// var callFunc = test();
// console.log(callFunc+5);
function test(){
    a = 5;
}
test();
 console.log(a);

function armStrong(num){
    //num = 371
    var n = num.toString().length; //3
    var result = 0;
    while(num > 0 ){
        var rem = num %10; //1 7 3
        result+=Math.pow(rem,n); //1 243 27
        num = Math.floor(num/10); //37 //3 0
    }
    console.log(result);
}
var obj = {
    a: 10,
    b: 'praveen'
};
console.log(0.3+0.4 === 0.7)
// 1 == true  // true  0.700000000001
// 1 === true // false
// 0.3+0.4 == 0.7 // false
// Math.floor Math.ceil 2 - 3
armStrong(153);
// var a;
// function test(){
//     console.log(a); //10 undefined 10
// }
// test();
// a=10;
// a = 10;
// b = 20;

// a = 20;
// b = 10

// substr(index,length)
// substring(start,end)
//slice(start,end) -- we can pass negative values
//length
//charAt
//charCodeAt()
//endsWith()
//startsWith()
//indexOf()
//lastIndexOf()
//trim()
//replace()
//repeat
//toString
//toUpperCase
//toLowerCase
//concatation '+''
//split

// in a paragraph we have replaced a particular character or word
// how many characters in a particular string ex: i/p string:praveen repeatcharacter='e' o/p- 2
// repeat a substring in a given string i/p praveen repeat ee o/p praveeeen


/**
 * Math.PI
 * Math.round
 * Math.ceil
 * Math.floor
 * Math.random
 * Math.sin
 * Math.cos
 * Math.pow
 * Math.sqrt
 * Math.abs
 * Math.min
 * Math.max
 * new Date()
 * new Date().getYear
 * new Date().getFullYear
 * new Date().getDay
 * new Date().getDate
 * new Date().getMonth
 * new Date().getHours
 * new Date().getMinutes
 * new Date().getSeconds
 * new Date().getMilliSeconds
 * new Date().setFullYear
 * new Date().setDate
 * new Date().setMonth
 * Arr.length
 * Arr.push
 * Arr.pop
 * Arr.shift
 * Arr.unshift
 * Arr.slice
 * Arr.splice
 * Arr.toString
 * Arr.join
 * Arr.reverse
 * 
 * 
 * shallow copy - obj1 and we are copieng obj1 into obj2 an
 * deep copy - obj1 and we are coping obj1 into obj2 and we are creating another moery address
 * OBJect.assign(target,source)
 * target - obj{id:1,firstName:'praveen'}
 * source - obj1 {id:3,lastName:'kumar'}
 * result - {id: 3,firstName: 'praveen', lastName: 'kumar'}
 * inheritance
 * 
 * person - 2 objects 1.obj 2.obj1
 * i want to add new property that should belogns to obj only not for obj1
 * person.fullNmae - obj and obj1
 * obj has fullName
 * obj1
 * 
 * seal - 
 * freeze - 
 * isNaN - true - false
 * 1+1+'1'+1+1 - 2+NaN 2111
 * [10,20,30].sum();
 * DOM - document object Model
 * document.getElementBy("Id")
 */