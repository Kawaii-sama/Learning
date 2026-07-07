/*
1. to lock javascript in browser we use console. Console gives:- errors, warnings, custom messages. To write anything on console we use console.log();
// -> single line comment
2. var:- update yes, redeclare yes, initial value undefined
3. let:- update yes, redeclare no, initial value not undefined
4. const:- update no, redeclare no
5. Airthmatic operators:- + , - , * , / , %
6. Datatypes:- Primitive:- immutable data which is at lowest level of this language. object:- key value pair
    to access keys in object:- object['key'] or object.key ; object ko update karna:- object['key'] = newValue; value print karna
    object['key']().
7. nested objects:- user = {
                    name : pratibha;
                    gender : female;
                    address:
                        1st: India}
8. if (ui ==== id) {
    else if (uc === id)
        {else if (uf === id)
            {else {
                console.log("Hi")
            }
        }
            }
        }


9. switch (day) {
        case 1:
        console.log(Monday);
        break;
        
        case 2:
        console.log(Turesday);
        break;
        
        case 3:
        console.lod(Wednesday);
        break;
        
        default:
        console.log(Chal hatt);
    }

10. loops in js:- for loop, for each, for of, while, do while:-
    for each:- array.forEach(function myFunc(index, element) {
               console.log(index,element);
               )}
    for of:- for ( let x of array) {
                console.log(x);
                }
    while:- let i=5;
            while(i<=5){
            ...
            i--;
            }

    do while:-let x = 10;
              do{
              cosole.log(x);
              x--;
              }while(x>0);

11. function add(a+b) {
    return a+b;
    }

    add(1,2);

    fat arrow functions:- let add = (a,b) => {
                            a+b;
                            }

12. many events can be triggered in js , we can customize some of them to fire at ideal time.
    syntax:-
    <!DOCTYPE html>
    <html>
    <body>
    <button id="test"> Click me </button>
    <script>

    var wish = document.getElementByID("test");

    test.onclick = funtion() {
        console.log("Happy Birthday");
        };
    </script>
    </body>
    </html>


13. strings in js:-
    let sisName = "Chakshu Pragya";
    let motherName = "Mammma";
    let fatherName = "Papa";

    sisName.length;

14. template literals:- embeds variable into string.
    let firstName = 'Dragon'; let lastName = 'Fairy';
    console.log (`My name is ${firstName} , ${lastName}`);

15. const arr = ['Diamond' , 'Business'];

16. console.log(typeof('Hello')); console.log(typeof(19.02));

17. Hoisting:- Interpreter sends variables, functions, classes at the top of the code before execution. but only declarations are transferred not initialization.

18. javascript is oops, we have constructors as well as inheritance
19. this keyword is used to target objects, different scope.
20. Javascript is high - level language because it:- a. manages memory (automatic garbage collection) and extracts hardware - level complexities.
21. Single Threaded:- has a single call stack and executes one command at a time.
22. Interpreted:- executes line-by-line at run time.
23. JIT:- Just in time, dynamic conversion of javascript code into machine code before execution
24. Prototype-Based:- object can inherit properties directly from other objects rather than blueprints.
25. Multi-paradigm :- supports multiple programming styles like:- procedural, oops, functional etc.
26. Dynamic:- variable are typed at runtime, allows data types to change during execution.
27. Non blocking event loop:- offloads time consuming tasks to system kernel so that javascript can execute code without waiting.
28. handles io intensive work, even though it is single threaded, because of non blocking event loop.
29. <script> tag is used to add this in frontend.
30. various listeners are used, one of them is btn.onclick = () => {}  , used for making button intercative
31. javascript is used to grab an element from the DOM.
32. functions are first class objects for funtional programming but it also supports classes and inhertiance making it oops freindly.
33. it can work asychronously thanks to promise api. supports async await syntax.
34. can run on server because of node.js runtime.
35. interaction style uses file system apis
*/