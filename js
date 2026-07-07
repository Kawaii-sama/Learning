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
19. this keyword is used to target objects, different scope
*/