const canDrive = (x) => {
    return x >= 18 ? true : false;
}
let runagain = true;

while (runagain) {
    let age = prompt("Enter Your Age:")
    age = Number.parseInt(age)
    if(age<0){
        console.error("Invalid Age")
        break;
    }
    else{

            if (canDrive(age)) {
                alert("You can Drive")
            }

            else {
                alert("You cannot drive")
            }
            runagain = confirm("Do you want to play again?")
    }

}