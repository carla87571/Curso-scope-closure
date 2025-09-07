// Ejemplo de ámbito de función y bloque en JavaScript
// Function Scope
function greeting() {
   let userName = "Alice";
   console.log(userName);

    if (userName === "Alice") {
       console.log(`Hello ${userName}!`);
   }
}
greeting();
console.log(userName); // ReferenceError: userName is not defined


