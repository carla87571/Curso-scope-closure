// variables

var a; // declarando
var b = 'b'; // declarada y asignada
b = 'bb'; // reasignando
var a = 'aa'; // redeclarando

// global scope
var fruit = 'apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = 'Colombia'; // estoy declarando una variable global, que puede ser usada en cualquier parte del código.
  console.log(country);
}
countries();
console.log(country); // 'Colombia'