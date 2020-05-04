function Cat() {
	this.stomath = [];
};


Cat.prototype.eat = function(mouse) {
	this.stomath.push(mouse);
	mouse.die();
};

module.exports = Cat;