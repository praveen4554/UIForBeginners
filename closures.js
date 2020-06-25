function add(a){
    function addb(b) {
        return a+b;
    }
    return addb;
}


var add3 = add(3); // parent function value set as 3
var add5 = add(5); // parent functon values set as 5
console.log('first value'+add3(7)); //10
 console.log('second value'+add5(8));  //13

function makeAdd(a){
    return function(b){
        return a+b;
    }
}


var add7 = makeAdd(7);
var add10 = makeAdd(10);
console.log(add7(2));
console.log(add10(5));

// console.log(this);

var test = {
    val: 12,
    returnValue: function(){
        return this.val;
    },
};

console.log(test.returnValue());

var a = 10;
function abc(){
  var a =5;
  console.log(a);//5
  console.log(this.a); //10
}

abc();

/**
 * if you want to pass scope to a function we can use
 * call,bind,apply
 * bind - we can pass scope now and ivokes later
 * call - it will calls immediately and arguments or comma separated
 * apply- invokes immediately and it accepts array of arguments 
 */

var person = {
    name: 'praveen',
    hello: function(arg){
        console.log(this);
        console.log('person name is '+this.name+' says '+arg);
    }
}
console.log(person.name);
//person.name = 'Sajita';
var personSaysHello = person.hello.bind({name: 'sajita'});
 person.hello.call({name: 'veda'},'Hello');
 personSaysHello('Hello');
person.hello('Hello');

var personObj = {
  name: 'praveen',
    hello: function(arg){
        console.log(this);
        console.log('person name is '+this.name+' says '+arg);
    }
}

personObj.hello.apply({name:'yukta'},['Hello']);



