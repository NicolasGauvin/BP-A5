var lol = 1;

class Cat {
	makeSound() {
		return 'Meowww' + lol;
	}
}

// exports = Cat; // It will not work with `new Cat();`
module.exports = Cat;