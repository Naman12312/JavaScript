console.log("var let and const")
// var a = 1;
let a = 1;
// let a =3; // let can't be re-declared.
let c = null;
let d = undefined;

const e = 0;
// const e = 4; // e = 4; //const can nor be changed or re-declared.
{

    // var a = 3; //var doesn't create a new variable and hence changes the global(var a = 1;) variable.
    let a = 2; // creates a new local variable for the block.(Doesn't change the global(let a = 1;) variable.)
    const e = 3; // creates a new local variable for the block.(Doesn't change the global(let a = 1;) variable.)
    console.log(a)
    console.log("e:", e)
}
console.log(a)
console.log("e:", e)

// console.log(h) // in case of let and const until the line in which h is initialized (line 22)is executed, any code that accesses h will throw an exception
// let h = 5; const h = 5;
// console.log(h)
// var h = 5; // whereas var will not throw an exception, instead it will be intialized as undefined.

// Don't use var as it can be re-declared and can cause bugs in the program.
