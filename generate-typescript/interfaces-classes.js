// Interfaces
var valueLater;
valueLater = {
    born: 1935,
    name: 'Sara Teasdale'
};
var newBook = {
    author: 'Brian Reicher',
    pages: 90
};
var hasBoth = {
    property: function () { return ""; },
    method: function () {
        return "";
    }
};
//   COME BACK TO CALL SIGNITURES
// Classes & OOP
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        console.log('${name}, do stuff[');
    };
    return Greeter;
}());
new Greeter().greet('Brian Reicher');
var FieldTrip = /** @class */ (function () {
    function FieldTrip(destination, date) {
        this.destination = destination;
        this.tripDate = date;
    }
    return FieldTrip;
}());
var trip = new FieldTrip('planetarium', 22);
trip.destination;
trip.tripDate;
var WithPropertyParameters = /** @class */ (function () {
    function WithPropertyParameters() {
        this.takesParameters = function (input) { return input ? "Yes" : "No"; };
    }
    return WithPropertyParameters;
}());
var instance = new WithPropertyParameters();
instance.takesParameters(true); // Ok
// instance.takesParameters(123); not ok
