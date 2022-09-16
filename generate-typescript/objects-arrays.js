// Poor syntax
var bad_syntax_person = {
    name: 'Brian',
    age: 20
};
// Better object syntax
var person = {
    name: 'Brian',
    age: 20,
    hobbies: ['Sports', 'Software']
};
var favAct;
var favHoliday;
favAct = ['baseball', 'football'];
favHoliday = ['christmas', 'december', 25];
// for(let i in person.hobbies)
// {
//     console.log(person.hobbies[i])
// }
// Better loop syntax
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i.toUpperCase());
}
// Tuples -> fixed length array
var human = { role: [2, 'engineer']
};
human.role.push('admin');
human.role[1] = 'ml engineer';
// Enums
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var human1 = {
    role: Role.ADMIN
};
// any -> fallback, avoid using
var favColors;
favColors = ['blue', false];
