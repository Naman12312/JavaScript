// Question - 1
const a = "hello";
const b = 2;
console.log(a+b)

// Question - 2
console.log(typeof (a+b)) // without parantheses: typeof a +(b) this is what happens.

// Question - 3
const object1 = {
    name:"GoldarmGang" // giving the key as a string isn't necessary in JS but it is necessary in Python.
}


// object1 = 34;
console.log(object1.name) // You can access this way too.
// Question - 4
object1["name"] = "Naman"
object1["roll"] = "good" // a key can be added or changed cuz object1 just wants that object if the values inside the object change, object1 doesn't care. 
console.log(object1)

//Question - 5

const dict = {
    afforest:"To plant trees on a large scale.",
    aftermath:"A situation that is the result of an important or unpleasant event.",
    blithesome:"(of a person) having a cheerful disposition.",
    caprice:"A sudden and unaccountable change of mood or behaviour.",
    becalm:"Leave (a sailing ship) unable to move through lack of wind."
}

console.log(dict["afforest"])

//This is a cool comment.