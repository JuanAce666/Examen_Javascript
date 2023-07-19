//Arrays
//Punto 1
/*var frutas = ['manzana', 'plátano', 'naranja', 'kiwi', 'pera', 'piña'];
var frutasPares = '';
var frutasImpares = '';
for (let i = 0; i < frutas.length; i++) {
    if (i % 2 === 0) {
        frutasPares += frutas[i] + ' ';
    } else {
        frutasImpares += frutas[i] + ' ';
    }
}
document.write('Frutas en posiciones pares: ' + frutasPares+"<br>");
document.write('Frutas en posiciones impares: ' + frutasImpares);*/

//punto 2
/*let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Ingresa el número " + (i + 1) + ":"));
    numeros[i] = numero;
}
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    suma += numeros[i];
}
let promedio = suma / numeros.length;
document.write('Números ingresados: ');
for (let i = 0; i < numeros.length; i++) {
    document.write(numeros[i]);
    if (i !== numeros.length - 1) {
        document.write(', ');
    }
}
document.write('Mayor número: ' + mayor+ "<br>");
document.write('Menor número: ' + menor+ "<br>");
document.write('Promedio: ' + promedio+ "<br>");*/

//Punto3
/*let arreglo = ['zanahoria', 'banano', 'manzana', 'pera', 'cebolla', 'papa', 'fresas', 'Ajo', 'Sandía'];
let resultado = 'Frutas : ';
for (let i = 0; i < arreglo.length; i++) {
    let elemento = arreglo[i];
    if (elemento === 'manzana' || elemento === 'pera' || elemento === 'banano' || elemento === 'fresas' || elemento === 'Sandía') {
        resultado += elemento;
        if (i < arreglo.length - 1) {
            resultado += ', ';
        }
    }
}
document.write(resultado);*/

//Punto 4
/*let empleados = [
    { nombre: "pedro", salario: 5000000, profesion: "Abogado" },
    { nombre: "Angie", salario: 3900000, profesion: "Odontóloga" },
    { nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario" },
    { nombre: "Lina", salario: 4500000, profesion: "Psicóloga" }
];
let apellidos = ["Acevedo", "Ramirez", "Lopez", "Nakama"];
for (let i = 0; i < empleados.length; i++) {
    empleados[i].nombre += " " + apellidos[i];
}
let sumaSalarios = 0;
for (let empleado of empleados) {
    sumaSalarios += empleado.salario;
}
document.write("Suma total de salarios: " + sumaSalarios + "<br>");
for (let empleado of empleados) {
    document.write("<br>Empleados :<br>");
    document.write("Nombre completo: " + empleado.nombre + "<br>");
    document.write("Salario: " + empleado.salario + "<br>");
    document.write("Profesión: " + empleado.profesion + "<br>");
}*/

//Punto 5
/*let empleados = [
    { nombre: "pedro", salario: 5000000, profesion: "Abogado" },
    { nombre: "Angie", salario: 3900000, profesion: "Odontóloga" },
    { nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario" },
    { nombre: "Lina", salario: 4500000, profesion: "Psicóloga" }
];
let apellidos = ["Acevedo", "Ramirez", "Lopez", "Nakama"];
for (let i = 0; i < empleados.length; i++) {
    empleados[i].nombre += " " + apellidos[i];
}
for (let i = 0; i < empleados.length - 1; i++) {
    for (let j = 0; j < empleados.length - i - 1; j++) {
        if (empleados[j].salario < empleados[j + 1].salario) {
            let temp = empleados[j];
            empleados[j] = empleados[j + 1];
            empleados[j + 1] = temp;
        }
    }
}
let sumaSalarios = 0;
for (let empleado of empleados) {
    sumaSalarios += empleado.salario;
}
document.write("Suma total de salarios: " + sumaSalarios + "<br>");
for (let empleado of empleados) {
    document.write("<br>Empleado:<br>");
    document.write("Nombre completo: " + empleado.nombre + "<br>");
    document.write("Salario: " + empleado.salario + "<br>");
    document.write("Profesión: " + empleado.profesion + "<br>");
}*/


