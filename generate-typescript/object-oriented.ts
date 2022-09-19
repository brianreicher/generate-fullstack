// Classes as types & further OOP

class CheckHello{
    sayHello(){
        console.log('CheckHello');
    }
}

let check: CheckHello;

check = new CheckHello();
// check = 'hello'; CANT DO 

// Can modify classes through object assignment
class SchoolBus {
    getAbilities() {
        return ["magic", "shapeshifting"];
    }
}

function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAbilities());
}

withSchoolBus(new SchoolBus()); // Ok

// Ok
withSchoolBus({
    getAbilities: () => ["transmogrification"],
});


// Classes and Interfaces
interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number) {
        for (let i = 0; i < hours; i+= 1) {
            console.log("...studying...");
        }
    }
}