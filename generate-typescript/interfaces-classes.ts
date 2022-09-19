// Interfaces

type Poet = {
    born: number,
    name: string
}

interface Artist{ 
    born: number,
    name: string
}

let valueLater: Artist;

valueLater = {
    born: 1935, 
    name: 'Sara Teasdale'
}

interface Book{
    author?: string,
    pages: number
}

const newBook ={
    author: 'Brian Reicher',
    pages: 90
}

// Readonly

interface Page{
    readonly text: string
}

interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
  }

  const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
      return "";
    }
  };
  
//   COME BACK TO CALL SIGNITURES

// Classes & OOP

class Greeter{
    greet(name: string){
        console.log('${name}, do stuff[');
    }
}

new Greeter().greet('Brian Reicher');

class FieldTrip{
    destination: string;
    tripDate: number;

    constructor(destination: string, date: number){
        this.destination = destination;
        this.tripDate = date;

    }
}

const trip = new FieldTrip('planetarium', 22);
trip.destination;
trip.tripDate;

class WithPropertyParameters {
    takesParameters = (input: boolean) => input ? "Yes" : "No";
}

const instance = new WithPropertyParameters();

instance.takesParameters(true); // Ok

// instance.takesParameters(123); not ok