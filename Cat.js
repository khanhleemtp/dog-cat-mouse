function Cat() {
	this.stomath = [];
};


Cat.prototype.eat = function(mouse) {
	this.stomath.push(mouse);
	mouse.die();
};

var tom = new Cat();

var mickey = new Mouse('mickey');

tom.eat(mickey);

console.log(tom);

module.exports = Cat;