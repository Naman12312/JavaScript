class Mistri{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    makeAHouse(){
        console.log(`${this.name} of age ${this.age} is a ${this.gender} who is making a house.`)
    }
}


class BirjuMistri extends Mistri{
    istriKar(){
        console.log(`${this.name} Mistri kare istri!`)
    }
}




let Birju = new BirjuMistri("Birju", 12, "Male")
Birju.makeAHouse()
Birju.istriKar()