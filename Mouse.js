function Mouse(name) {
	this.name = name;
	this.isLive = true;
}

Mouse.prototype.die = function() {
	this.isLive = false;
}



module.exports = Mouse;
