// Poor syntax
const bad_syntax_person: {
    name: string;
     age: number;
    }= 
{
    name: 'Brian',
    age: 20
}

// Better object syntax
const person = {
    name: 'Brian',
    age: 20,
    hobbies: ['Sports', 'Software']
}

let favAct: string[];
let favHoliday: any[];
favAct = ['baseball', 'football'];
favHoliday = ['christmas', 'december', 25]

// for(let i in person.hobbies)
// {
//     console.log(person.hobbies[i])
// }

// Better loop syntax
for(const i of person.hobbies)
{
    console.log(i.toUpperCase());
}

// Tuples -> fixed length array

const human: {
    role: [number, string];
}=
{ role: [2, 'engineer']
}

human.role.push('admin');
human.role[1] = 'ml engineer';

// Enums

const human1 = {
    role: "READ ONLY USER"
}

