const bioData={
    name:"Hiba",
    age:'24',
    occupation:'Software Develpoepr',
    email:"syedahibaareej@gmail.com",
    phoneNumber: '03113555830',
    instituteName: 'JAWAN PAKISTAN',
    eduction:'CS Graduate',
    city:"Karachi"
}
function printBioData(){
    document.write(`Name : ${bioData.name} <br> Age : ${bioData.age} <br> Occupation : ${bioData.occupation} <br> Email: ${bioData.email} <br> Phone Number : ${bioData.phoneNumber}<br> Institute Name : ${bioData.instituteName} <br> Education : ${bioData.eduction}`)
}
printBioData();



// initialization
var a;
// assigning 
a=5;
// reinitialization
var a;
// reasigning
a=10;

function abc(){
    var a=500;
    console.log(a);
}
abc();
// if we call the function before we have made it, it will run perfectly---> hoisting, it is alos showing block scope.
var greeter = "hey hi";
    function newFunction() {
        var hello = "hello";
    }
// Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:
var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined

// var variables can be re-declared and updated
    var greeter = "hey hi";
    var greeter = "say Hello instead";

    var greeter = "hey hi";
    greeter = "say Hello instead";
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
    
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"




// initialization
let b;
// assigning 
b=5;
// reinitialization
// let b; reinitialization is giving error
// reasigning
b=10;

function def(){
    let b=600;
    console.log(b);
}
def();

// let is block scoped
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined

// let can be updated but not re-declared.
// let greeting = "say Hi";
// greeting = "say Hello instead"; this is giving error here but if we define it in different scopes it wont give an error
// let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
// Hoisting of let
// Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.





// declaration
// const c=0;
// assigning
// c=9;
// reasigning
// c=90;
// giving error cant be reasigned
function ghi(){
    const c=12;
    console.log(c)
}
ghi();
// function scope

// const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.
// const cannot be updated or re-declared
// This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

const greet = "say Hi";
    greet = "say Hello instead";// error: Assignment to constant variable.

    // Every const declaration, therefore, must be initialized at the time of declaration.


// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.