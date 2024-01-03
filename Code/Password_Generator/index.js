class Password{
    
    constructor(){
        this.alphabetslower = "abcdefghijklmnopqrstuvwxyz"
        this.alphabetsupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.specialchars = "~`!@#$%^&*()_+-=\'\";:<>,.?/\\{}[]"
        this.numbers = "1234567890"
        this.allchars = [this.alphabetslower, this.specialchars, this.numbers, this.alphabetsupper]
    }
    generatepassword(len){
         let samplepass = []
        //  getting the required chars:
        let requiredRandAlphalower = this.alphabetslower[Math.floor(Math.random()*this.alphabetslower.length)]
        let requiredRandAlphaupper = this.alphabetsupper[Math.floor(Math.random()*this.alphabetsupper.length)]
        let requiredRandSpecial = this.specialchars[Math.floor(Math.random()*this.specialchars.length)]
        let requiredRandNum = this.numbers[Math.floor(Math.random()*this.numbers.length)]
        samplepass.push(requiredRandAlphalower,requiredRandAlphaupper, requiredRandNum, requiredRandSpecial)
        for(let i=4; i<len;i++){
          let choicefromallchars = this.allchars[Math.floor(Math.random()*this.allchars.length)]
          // console.log(choicefromallchars)
          let choiceofthechosenlistofchars = choicefromallchars[Math.floor(Math.random()*choicefromallchars.length)]
          samplepass.push(choiceofthechosenlistofchars)
        }
        console.log(samplepass)
        samplepass.sort((a,b)=>{
          return (Math.floor(Math.random()*2)<1)? -1 : 1
        })
        console.log(samplepass)
        let samplepassasstr = ""
        for(let i of samplepass){
          samplepassasstr+=i
        }

        return samplepassasstr
      }
}


let pass = new Password()
let mypassword = pass.generatepassword(16)
console.log(mypassword)