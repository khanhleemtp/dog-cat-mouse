var Mouse = require('./Mouse');

function Cat() {
	this.stomath = [];
};


Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse) {
	this.stomath.push(animal);
	}
	else {
		throw new Error('Cat can only eat mouse');
	}
	animal.die();
};

module.exports = Cat;