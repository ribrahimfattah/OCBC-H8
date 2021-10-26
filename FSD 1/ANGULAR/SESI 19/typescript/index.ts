const message: string = "Halooo"
console.log(message)




//  ============== function

function greetParticipant(name: string, age?: number) {  // tanda tanya (?) untuk kondisional
    console.log(`Hello ${name}! Your age is ${age}.`)
}

greetParticipant('ibra', 22);

let anyStudents: any[] = [
    ['Gusti', true],
    ['Gusti', true]
]

let students: (string | boolean)[][] = [
    ['Gusti', true],
    ['Gusti', true]
]


// ============ Declare object

//  cara 1: decalre langsung
// let student: {
//     name: string
//     age: number | string
//     score: number
// } = {
//     name: 'Ibra',
//     age: 17,
//     score: 100
// }

//  cara 2 : declare leat interface
interface StudentObject {
    name: string
    age: number | string
    score: number
    address?: string
}

let student: StudentObject = {
    name: 'Ibra',
    age: 17,
    score: 100
}

let employees: StudentObject[] = [
    {
        name: 'Ibra',
        age: 17,
        score: 100
    },
    student
]

//  deklarsi class

class Customer {
    name: string;
    age: number;
    score: number;
    mentors: string[] = [];

    constructor(name: string, age: number, score: number, mentor: string) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.mentors.push(mentor);
    }

    changeScore(newScore: number) {
        this.score = newScore
    }
}

const riyan = new Customer('Riyan', 22, 100, 'Arif')