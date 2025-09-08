// cuando imprimo antes de declarar la variable, me imprime 'undefined' en lugar de un error
// porque internamente javaScript declara la variable antes del console.log , entonces (var nameOfDog;) y por eso imprime undefined
console.log(nameOfDog); // undefined
var nameOfDog = 'Elmo';
console.log(nameOfDog); // Elmo


nameOfDog();
function nameOfDog() {
    console.log(`El mejor perrito es ${nameOfDog}`);
}
var elmo = 'Elmito';

nameOfDog1("Elmo");
function nameOfDog1(name) {
    console.log(name);
}