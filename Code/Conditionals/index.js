let a = prompt("Enter your age")
a = Number.parseInt(a);
if(a<0){
    console.log("This is an invalid age.")
}
else if(a<9){
    console.log("You are a kid and don't even think of driving")    

}
else if(a<18 && a>9){
    console.log("You are a kid but you can drive after you are 18")
}

else{ 
    console.log("You can Drive")
}
console.log("You can", a >= 18 ? "drive" : "not drive")