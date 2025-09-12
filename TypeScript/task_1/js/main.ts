interface Teacher{
     readonly firstName:string,
     readonly lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperiance?: Number,
    location:string
    [key :string]: any
}

interface Directors extends Teacher{
    numberOfReports: Number
}

interface printTeacherFunction{
    readonly firstName:string,
    readonly lastName: string,
}

function printTeacher(firstName: string, lastName: string,): string {
    return `${firstName[0]}.${lastName}`
}


interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface{
    firstName: string
    lastName:string
    constructor( firstName:string,lastName:string) {
        this.firstName = firstName,
        this.lastName = lastName
    }
    workOnHomework():string{
        return "Currently working"
    }
    displayName(){
        return this.firstName
    }

}
