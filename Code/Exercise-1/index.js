let randnum = Math.random()*100
randnum = Number.parseInt(randnum)
console.log(randnum)
let no_of_guesses = 0
let guess;
while(randnum!=guess){
    guess = Number.parseInt(prompt("Enter a Number")) 
    if(guess<randnum){
        console.log("Your Number is less than the Actual Number.")
        console.log("Try again")
        no_of_guesses++
 
    }
    else if(guess>randnum){
        console.log("Your Number is greater than the Actual Number.")
        console.log("Try again")
  

        no_of_guesses++
    }

    
    }
    
let score = 100-no_of_guesses
console.log("You Guessed the correct Number!")
console.log(`The correct Number was: ${randnum}`)
console.log(`Your Score is: ${score}`)