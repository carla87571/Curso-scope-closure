// var SI SE PUEDE REDECLARAR Y REASIGNAR
var firstName; // undefined declaramos
firstName = 'Carla'; // asignamos
console.log(firstName); // imprimimos Carla

var lastName = 'Elisa'; // declaramos y asignamos
lastName = 'Ana'; // reasignamos
console.log(lastName); // imprimimos Ana

var secondName = 'David'; // declaramos y asignamos
var secondName = 'Ana'; // redeclaramos y reasignamos
console.log(secondName); // imprimimos Ana


// let NO SE PUEDE REDECLARAR
let fruit = 'Apple'; // declarando y asignando
fruit = 'Kiwi'; // reasignando
// let fruit = 'Banana'; // NO PUEDE REDECLARAR SyntaxError: Identifier 'fruit' has already been declared


// const NO SE PUEDE REDECLARAR NI REASIGNAR
const animal = 'Dog'; // declarando y asignando
// animal = 'Cat'; // NO SE PUEDE REASIGNAR TypeError: Assignment to constant variable.
// const animal = 'Snake'; // NO SE PUEDE REDECLARAR SyntaxError: Identifier 'animal' has already been declared
console.log(animal);    

const vehicles = [];
vehicles.push('Car'); // agregando un valor al array
console.log(vehicles); // ['Car']
vehicles.push('Bike');
console.log(vehicles); // ['Car', 'Bike']
// vehicles = ['Bus', 'Train']; // NO SE PUEDE REASIGNAR TypeError: Assignment to constant variable.
vehicles.pop(); // eliminando el último valor del array
console.log(vehicles); // ['Car']
