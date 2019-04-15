var Bee = function() {
  // a food property that is inherited from grub
  Grub.call(this);
  // an age property that is set to 5
  this.age = 5;
  // a color property that is set to yellow
  this.color = 'yellow';
  // a job property that is set to keep on growing
  this.job = 'keep on growing';
};

// set the prototype by calling the Grub superclass
// an eat method that is inherited from grub
Bee.prototype = Object.create(Grub.prototype);
// set the constructor
Bee.prototype.constructor = Bee;