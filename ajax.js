// var timer  = new Date().getSeconds();
// document.querySelector("#timer").innerHTML = timer;

// var myInterval = setInterval(changeTimer,1000);

// function changeTimer(){
//     timer--;
// document.querySelector("#timer").innerHTML = new Date().getHours()+ ":" + new Date().getMinutes()+ ":"+ timer;
// if(timer === -1){
//     clearTimer();
// }

// }

// function clearTimer(){
//     alert('you have done the exam');
// document.querySelector("#timer").innerHTML = 'Marks';
//     clearInterval(myInterval);
// }
//AJAX - asynchronous javascript and xml
//https://jsonplaceholder.typicode.com/todos/1

function getData(id){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
          console.log(xhttp.responseText);
          document.querySelector("#timer").innerHTML  = "you have beeen succesfully logged in";
      } else if(this.readyState === 4 && this.status === 404){
          document.querySelector("#timer").innerHTML  = "please check your username and password";

      }
  }
  xhttp.open('GET','https://jsonplaceholder.typicode.com/todos/'+id,true);
  xhttp.send();
}


function postData(){
     var xhttp = new XMLHttpRequest();
     var data = new FormData();
     data.append('title','praveen');
     data.append('body','praveen kumar');
     data.append('userId', 11111);
  xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 201){
          console.log(typeof xhttp.responseText);
            getData(JSON.parse(xhttp.responseText).id);
          //document.querySelector("#timer").innerHTML  = "you have beeen succesfully logged in";
      } else if(this.readyState === 4 && this.status === 404){
          document.querySelector("#timer").innerHTML  = "please check your username and password";

      }
  }
  xhttp.open('POST','https://jsonplaceholder.typicode.com/posts',true);
  xhttp.send(data);
}
//postData();
/**
 * ready state  0 - unintialized
 * 1 - initaiized
 * 2 - request received
 * 3 - processing request
 * 4 - request is completed
 * statusCode
 * 2XX
 * 200 - it will be success and we are getting responseText
 * 201 - it will create a new record
 * 204 - no content 
 * 4XX - error
 * 400 - bad request - you missed first Name some fileds
 * 401 - missed authentication means the access code
 * 403 - forbidden - we dont havee access to the server or data base
 * 404 - not found - the url wrong
 * 5XX - error
 * 500 - server error
 * 503 - service unavailable
 * 504 - the server is not giving the response with the time
 * methods
 * GET - get the data from the data base
 * POST - it will create new record in the database
 * PUT - to update the record - complete record
 * Patch - update the record - some of the fileds 
 * delete - delte the record
 * 
 * 
 */

// var promise = new Promise(function(resolve,reject){
//    var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function(){
//       if(this.readyState === 4 && this.status === 200){
//           resolve(xhttp.responseText);
//          // document.querySelector("#timer").innerHTML  = "you have beeen succesfully logged in";
//       } else if(this.readyState === 4 && this.status === 404){
//           reject(xhttp.responseText);
//           document.querySelector("#timer").innerHTML  = "please check your username and password";

//       }
//   }
//   xhttp.open('GET','https://jsonplaceholder.typicode.com/todos/111111',true);
//   xhttp.send();
// });

// promise.then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log('error',err);
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve(1);
//     })
// }).then(function(result){
//     console.log('first chain method',result);
//     return result+=1;
// }).then(function(result){
//     console.log('second chain method',result);
//     return result+=1;
// })

// new Promise(function(resolve,reject){
//      var xhttp = new XMLHttpRequest();
//      var data = new FormData();
//      data.append('title','praveen');
//      data.append('body','praveen kumar');
//      data.append('userId', 11111);
//   xhttp.onreadystatechange = function(){
//       if(this.readyState === 4 && this.status === 201){
//           console.log(typeof xhttp.responseText);
//             resolve(JSON.parse(xhttp.responseText).id);
//           //document.querySelector("#timer").innerHTML  = "you have beeen succesfully logged in";
//       } else if(this.readyState === 4 && this.status === 404){
//         reject(xhttp.responseText)
//       }
//   }
//   xhttp.open('POST','https://jsonplaceholder.typicode.com/posts',true);
//   xhttp.send(data);
// }).then(function(res){
//     getData(res)
// })

// var promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject(100);
//     })
// })


// var promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(200);
//     },2000)
// })


// var promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(300);
//     },4000)
// });

//  Promise.all([promise1,promise2,promise3]).then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log('all reject', err);
// });


function test(cb){
    setTimeout(function(){
        console.log('test function');
        cb();
    })
}

function callbackTest() {
    console.log('callback test call');
}

function UIClass() {
    console.log('learning javascript');
}
test(UIClass);

function variableScope(){
    for(let i=0;i<5;i++){
        setTimeout(function(){
        console.log(i);
        },2000);
    }
}
/**
 * function variableScope(){
 * var i;
    for(i=0;i<5;i++){

    }
    console.log(i);
}
 */

const a = 10; // immutable
console.log(a);
a=20;
variableScope();