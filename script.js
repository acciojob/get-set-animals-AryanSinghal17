//complete this code
class Animal {
	constructor(specis){
		this.specis = specis;
	}
	Getter(){
		return this.specis;
	}
	makeSound(){
		return `The ${this.specis} make a sound`;
	}
}

class Dog extends Animal {
	bark(){
		console.log("wool");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
