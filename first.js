
        //   var a=10;
        //   var b = "Hello";
        //   var c = true;
        //   var d = undefined;
        //   var e = null;
        //   var a = "Hello world";
          var a = 10;
          var b = 20;
        //   console.log(a+b);
        //   console.log(a-b); 10+11 21 10+10+11 10+11+11
        // a+a+++b+b--+a+b - 10+10+20+20+11+19
        // 10+10+21+21+10+20
        // a+a - 20
        // b= ++b - 21
        // 20+21 - 41
        // 41+21 - 62
        // b = 20
        // 10
        // 20
        /**
         * var a= 10;
         * var b= 20;
         * var result = ++b-(--a)+a+++b+++++a+b-a
         * 65
         * 65
         * 66
         * 21-9+9+21+11+22-11
         * 64
         * var result = a+b+++--b+a+++b
         * 80
         * 
         */
          // var a= false;
          // var b = true;
          // console.log(a && b); // if both a and b is true then it will returns true
          // console.log(a || b); // if both a and b is false it returns false 
          // console.log(!a);

           var a = 10;
           var b = 20;
          //  console.log(a === b); //false
          //  console.log(!(a > 10)); // true
          //  console.log((a>10) || (b <20)); // false
          //  console.log((a>=10) || (b <20)); //true
          //  console.log((a>10) && (b <20)); // false
          //  console.log((a>=10) && (b <20)); // false
          //  console.log((a>=10) && (b <=20)); // true
          //  console.log(((a>=10) && (b <=20)) || ((a>=10) && (b <20))); //true

          //  a+=b;
          //  a= a+b;
          // !((a >= 10) && (b < 20) && ((a >= 10) || (b < 20))) ? 'Hello' : 'world'
          // 
           //ternary operator
           //console.log(a >= 10 ? 'Hello' : 'world');
          
          //  console.log( a == b)
          //  console.log( a!= b);
          //  console.log( a === b);
          //  console.log( a!== b);
        //     console.log(a+ a+(++b)+ b--+a+b);
        //   console.log(typeof "Hello");
        //   document.write(a);
        //  console.log('Hello world'); 
        // if((a%2) === 0 ){
        //   a+=b;
        //   b+=a;
        //   console.log('true');
        //   console.log(a);
        //   console.log(b);
        //   document.write(a+b);
        // } else if(a < 10){
        //   console.log('second loop');

        // } else {
        //   console.log('checking else loop');
        // }
        // var name = 'sajitha';
        // switch(name){
        //   case 'praveen': a+=2;
        //       document.write(a);
        //       break;
        //   case 'veda': a+=5;
        //       document.write(a);
        //   case 'sajitha': a+=10;
        //       document.write(a);
        //   case 'yukta': a+=20;
        //       document.write(a);
        //       break;
        //       default:
        //        a+=15;
        //       document.write(a);


        // }
        var a = ['praveen','veda','sajitha','yuktha'];
        var i =0;
        while(i < 4){
          document.write(a[i]);
          i++;
        }
          function sayHello(){
              alert('Hello world');
          }

          /**
           * Numbers: 1,2,3,
           * Strings: ''
           * Boolean: true or false  1 or 0
           * undefined
           * Null
           * Symbol
           * add +
           * subtraction -
           * multplication *
           * divison /
           * reminder 5%2 - 1
           * post increment a++
           * post decrement a--
           * predecrment --a
           */