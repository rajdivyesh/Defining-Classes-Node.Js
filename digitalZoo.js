class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    speak() {
        return "The animal makes a sound.";
    }
}
class Lion extends Animal {
    constructor(name, age, maneColor) {
        super(name, "Lion", age);
        this.maneColor = maneColor;
    }
    speak() {
        return "Roar!";
    }
    hunt() {
        console.log("The lion is hunting.");
    }
}
class Elephant extends Animal {
    constructor(name, age, tuskLength) {
        super(name, "Elephant", age);
        this.tuskLength = tuskLength;
    }
    speak() {
        return "Trumpet!";
    }
    sprayWater() {
        console.log("The elephant sprays water.");
    }
}
class Penguin extends Animal {
    constructor(name, age, isFluffy) {
        super(name, "Penguin", age);
        this.isFluffy = isFluffy;
    }
    speak() {
        return "Squawk!";
    }
    slideOnIce() {
        console.log("The penguin is sliding on ice.");
    }
}

const lion = new Lion("Simba", 8, "Golden");
const elephant = new Elephant("Erravat", 23, 4);
const penguin = new Penguin("Cintu", 7, true);

console.log(`Name: ${lion.name}, Species: ${lion.species}, Age: ${lion.age}, Mane Color: ${lion.maneColor}`);
console.log(`Lion says: ${lion.speak()}`);
lion.hunt();

console.log(`Name: ${elephant.name}, Species: ${elephant.species}, Age: ${elephant.age}, Tusk Length: ${elephant.tuskLength}`);
console.log(`Elephant says: ${elephant.speak()}`);
elephant.sprayWater();

console.log(`Name: ${penguin.name}, Species: ${penguin.species}, Age: ${penguin.age}, Is Fluffy: ${penguin.isFluffy}`);
console.log(`Penguin says: ${penguin.speak()}`);
penguin.slideOnIce();
