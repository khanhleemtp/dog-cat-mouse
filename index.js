var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var dog = new Dog('Tom');
var tom = new Cat();
var mouse = new Mouse('mickey');
tom.eat(mouse);
try {
	cat.eat(dog);
} catch (error) {
	console.log('error while cat eating dog');
}
console.log(tom);