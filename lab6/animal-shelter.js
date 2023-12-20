const animalData = require('./animal-data.json');

class Animal {
constructor(name, species, color, hunger) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
}
}

   class Cat extends Animal {
    constructor(name, color, hunger) {
      super(name, 'cat', color, hunger);
      this.food = 'fish';
    }
  
    greet() {
      console.log(`Meow, I'm ${this.name} the ${this.species}`);
    }
  
    feed() {
      this.hunger -= 20;
      console.log(`Yum, I love ${this.food}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, color, hunger) {
      super(name, 'dog', color, hunger);
      this.food = 'kibble';
    }
  
    greet() {
      console.log(`Woof, I'm ${this.name} the ${this.species}`);
    }
  
    feed() {
      this.hunger -= 20;
      console.log(`Yum, I love ${this.food}`);
    }
  }

greet(); {
    console.log('Hi I am ${this.name}. I am a ${this.species}.');
    }

feed(); {
    this.hunger -= 20;
    console.log('Yum, I love food')
}

class AnimalShelter {
constructor () {
    this.animals = [];
}

addAnimal(animal) {
    this.animals.push(animal);
}

adopt(animal) {
    const animalIndex = this.animals.indexOf(animal);  // find the index of the animal in the `this.animals` array
    this.animals.splice(animalIndex, 1);  // remove that animal from the `this.animals` array
  }

getAnimalsBySpecies(species) {
    return this.animals.filter(a => a.species === species);
  }
}

const shelter = new AnimalShelter();
  for (const a of animalData) {
    let hunger = 50;
    if (a.hunger) {
      hunger = a.hunger;
    }
  
    let animal;
    if (a.species === 'dog') {
      animal = new Dog(a.name, a.color, hunger);
    } else if (a.species === 'cat') {
      animal = new Cat(a.name, a.color, hunger);
    } else {
      animal = new Animal(a.name, a.species, a.color, hunger);
    }
    shelter.addAnimal(animal);
  }

for (const animal of shelter.animals) {
    animal.greet();
    animal.feed();
}
