function Cat() {
	this.stomath = [];
};

function Mouse(name) {
	this.name = name;
	this.isLive = true; 
};



Cat.prototype.eat = function(mouse) {
	this.stomath.push(mouse);
	mouse.isLive = false;
};

var tom = new Cat();

var mickey = new Mouse('mickey');

tom.eat(mickey);

console.log(tom);

module.exports = Cat;