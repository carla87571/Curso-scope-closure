const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal); // 0

    function parent() { // funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal); // 1 y 0

        function child() { // funcion interna
            console.log(inner, myNumber, myGlobal); //
        }
        return child();
    }

    return parent();
}

myFunction();


// Ejemplo1: Cuenta Bancaria
// Problema: Queremos proteger el saldo de una cuenta
function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial; // Variable "privada"
    
    // Funciones internas que "recuerdan" el saldo
    return {
        depositar: function(cantidad) {
            saldo += cantidad;
            console.log(`Depositaste $${cantidad}. Saldo: $${saldo}`);
        },
        
        retirar: function(cantidad) {
            if (cantidad <= saldo) {
                saldo -= cantidad;
                console.log(`Retiraste $${cantidad}. Saldo: $${saldo}`);
            } else {
                console.log("Fondos insuficientes");
            }
        },
        
        consultarSaldo: function() {
            console.log(`Saldo actual: $${saldo}`);
            return saldo;
        }
    };
}

// Uso práctico:
const miCuenta = crearCuentaBancaria(1000);
miCuenta.depositar(500);    // Depositaste $500. Saldo: $1500
miCuenta.retirar(300);      // Retiraste $300. Saldo: $1200
miCuenta.consultarSaldo();  // Saldo actual: $1200

// ¡El saldo está protegido! No puedes acceder directamente:
// console.log(saldo); // ❌ Error: saldo is not defined



// Ejemplo2 Carrito de Compras
function crearCarrito() {
    let productos = []; // Array "privado"
    
    return {
        agregar: function(producto, precio) {
            productos.push({ producto, precio });
            console.log(`${producto} agregado al carrito`);
        },
        
        mostrar: function() {
            console.log("Productos en el carrito:");
            productos.forEach(item => {
                console.log(`- ${item.producto}: $${item.precio}`);
            });
        },
        
        total: function() {
            const suma = productos.reduce((total, item) => total + item.precio, 0);
            console.log(`Total: $${suma}`);
            return suma;
        }
    };
}

// Uso:
const carrito = crearCarrito();
carrito.agregar("Laptop", 800);
carrito.agregar("Mouse", 25);
carrito.mostrar();
carrito.total();