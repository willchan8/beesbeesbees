var ForagerBee = function() {
  // call the Bee superclass
  Bee.call(this)
  
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// set the prototype
ForagerBee.prototype = Object.create(Grub.prototype);
// set the constructor
ForagerBee.prototype.constructor = ForagerBee;
// a forage method that allows the bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}