class Employee{
    constructor(name, role){
        this.name = name
        this.role = role
        console.log(this.name)
        console.log(this.role)
    }

    requestLeave(x){
        this.no_of_leaves = x
        console.log(`${this.name} has requested ${this.no_of_leaves} leaves`)
    }
}




let harry = new Employee("Harry", "Programmer")
harry.requestLeave(5)