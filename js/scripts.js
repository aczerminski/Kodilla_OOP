function Phone(brand, price, color, battery, screen, memory, warrantyCost) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.battery = battery;
  this.screen = screen;
  this.memory = memory;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", battery is " + this.battery + ", screen is " + this.screen + ", memory is " + this.memory + ", warrantyCost is " + (this.price * 0.1) + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "2800mah", "5 inches", "32gb");
var iPhone5S = new Phone("Apple", 2150, "black", "1800mah", "4 inches", "16gb");
var samsungGalaxy = new Phone("Samsung", 3250, "white", "4800mah", "6 inches", "64gb");
var lgPlus = new Phone("LG", 3550, "grey", "4800mah", "5 inches", "32gb");
var sonyXperia = new Phone("Sony", 3750, "blue", "4300mah", "6 inches", "64gb");

iPhone6S.printInfo();
iPhone5S.printInfo();
samsungGalaxy.printInfo();
lgPlus.printInfo();
sonyXperia.printInfo();
