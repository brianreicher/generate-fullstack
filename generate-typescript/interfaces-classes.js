// Interfaces
var _a;
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
var WithValue = /** @class */ (function () {
    // unused: number;
    // Error: Property 'unused' has no initializer
    // and is not definitely assigned in the constructor.
    function WithValue() {
        this.immediate = 0; // Ok
        this.later = 1;
    }
    return WithValue;
}());
var CheckInit = /** @class */ (function () {
    function CheckInit(propty) {
        this.property = propty;
    }
    return CheckInit;
}());
new CheckInit('length').property.length;
// add ! after variable name to disable init check 
var ActivitiesQueue = /** @class */ (function () {
    function ActivitiesQueue() {
    }
    ActivitiesQueue.prototype.initialize = function (pending) {
        this.pending = pending;
    };
    ActivitiesQueue.prototype.next = function () {
        return this.pending.pop();
    };
    return ActivitiesQueue;
}());
var activities = new ActivitiesQueue();
activities.initialize(['eat', 'sleep', 'learn']);
activities.next();
var MissingInitializer = /** @class */ (function () {
    function MissingInitializer() {
    }
    return MissingInitializer;
}());
(_a = new MissingInitializer().property) === null || _a === void 0 ? void 0 : _a.length; // Ok
// can also add readonly properties in additon to optional ones
