//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

//Now create three instances of Person with data you make up

var john = new Person("John", 33);
var steve = new Person("Steve", 23);
var bob = new Person("Bob", 43);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
    alert(this.name);
};

john.sayName();