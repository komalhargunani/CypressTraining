class Person{
    name:string;

    constructor(name: string){
        this.name = name;
    }


}

class Employee extends Person{
    empCode: number;

    constructor(empCode: number, name:string){
        super(name);
        this.empCode=empCode;
    }

    displayDetails(): void{
        console.log("Name = " +this.name+ ",Employee code= "+this.empCode);
    }


}

let emp = new Employee(1977,'Komal');
emp.displayDetails();