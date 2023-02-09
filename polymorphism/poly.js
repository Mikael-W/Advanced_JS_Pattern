function Professor(name) {
  this.name = name;
}

var professor = new Professor('sergio');

Professor.prototype.getDetails = function () {
  return this.name.toUpperCase();
}

console.log(professor.getDetails())

Professor.prototype.getDetails = function () {
  return this.name;
}

console.log(professor.getDetails())