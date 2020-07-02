// function add(a){
//     function addb(b) {
//         return a+b;
//     }
//     return addb;
// }


// var add3 = add(3); // parent function value set as 3
// var add5 = add(5); // parent functon values set as 5
// console.log('first value'+add3(7)); //10
//  console.log('second value'+add5(8));  //13

// function makeAdd(a){
//     return function(b){
//         return a+b;
//     }
// }


// var add7 = makeAdd(7);
// var add10 = makeAdd(10);
// console.log(add7(2));
// console.log(add10(5));

// // console.log(this);

// var test = {
//     val: 12,
//     returnValue: function(){
//         return this.val;
//     },
// };

// console.log(test.returnValue());

// var a = 10;
// function abc(){
//   var a =5;
//   console.log(a);//5
//   console.log(this.a); //10
// }

// abc();

// /**
//  * if you want to pass scope to a function we can use
//  * call,bind,apply
//  * bind - we can pass scope now and ivokes later
//  * call - it will calls immediately and arguments or comma separated
//  * apply- invokes immediately and it accepts array of arguments 
//  */

// var person = {
//     name: 'praveen',
//     hello: function(arg){
//         console.log(this);
//         console.log('person name is '+this.name+' says '+arg);
//     }
// }
// console.log(person.name);
// //person.name = 'Sajita';
// var personSaysHello = person.hello.bind({name: 'sajita'});
//  person.hello.call({name: 'veda'},'Hello');
//  personSaysHello('Hello');
// person.hello('Hello');

// var personObj = {
//   name: 'praveen',
//     hello: function(arg){
//         console.log(this);
//         console.log('person name is '+this.name+' says '+arg);
//     }
// }

// personObj.hello.apply({name:'yukta'},['Hello']);

var myVar = setInterval(myTimer, 1000);
var timer = 20;
function myTimer() {
   document.querySelector("#timer").innerHTML = timer;
    if(timer === 0) {
        stopInterval();
    }
    timer --;
}

function stopInterval(){
    clearInterval(myVar);
    alert("time is completed");
    document.querySelector("#timer").innerHTML = "your markes 20";
}


function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(xhttp.responseText);
        }
        if(this.readyState === 1) {
            console.log(xhttp);
        }
    }
    xhttp.onprogress = function() {
        console.log('progress',xhttp.readyState)
    }
    xhttp.onload = function() {
        console.log('load',xhttp.readyState)
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
    xhttp.send();
}
//getData();
/**
 * AJAX - asychronous javascript and html
 * ready state which will contains the values
 * 0 - unsent
 * 1 - OPENED - making an api call
 * 2 - HEADERS RECEVIED 
 * 3 - parial Data
 * 4 - operation completed - DONE
 * 
 * http has standard status call
 * 2XX - success
 * 200 - it means we have been getting success response from the data base.like getUsers()
 * 201 - it means we have been created new record in the data base . create new student()
 * 204 - it means we didnt get any data. geuser whose roll number 40 and doesnt exist
 * 202 - the request is accepted
 * 203 - proxy information
 * 4XX - errors
 * 400 - bad request - singUp - if you miss any details we will get 400
 * 401 - if you miss authentication or if the token expire we will get 
 * 402 - payment reuired
 * 403 - forbiddent - we dont have access to the data base
 * 404 - not found - the url is wrong 
 * 
 * 5XX - errors
 * 500 - internal server error - database -
 * 501 - not implemented
 * 502 - bad gateway - we are getting invalid response from the data base
 * 503 - Service unavailable
 * 504 - Gateway timeout 
 * methods
 * GET - getting the information from the database
 * POST - we are adding new column in data base - 201
 * PUT - update the existing recording - whole record
 * PATCH - update the existing record - some of the infomration
 * delete - delte the record
 * 
 */