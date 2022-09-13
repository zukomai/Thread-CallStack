// function first() {
//     document.getElementById("function1").innerHTML = "Frist Function Executed";
// }

// function second() {
//     document.getElementById("function2").innerHTML = "Second Function Executed";
// }

// function third() {
//     document.getElementById("function3").innerHTML = "Second Function Executed";

// }

// first();
// second();
// third();

// ---------------------------- NESTED FUNCTION CALL STACK -------------------------

function first() {
    document.getElementById("function1").innerHTML = "Frist Function Executed";
    second();
}

function second() {
    document.getElementById("function2").innerHTML = "Second Function Executed";
    third();
}

function third() {
    document.getElementById("function3").innerHTML = "Second Function Executed";
}

first();