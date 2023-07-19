//Punto 1
/*let productos = [];
for (let i = 1; i <= 3; i++) {
  let producto = prompt(`Ingrese el nombre del producto ${i}:`);
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
  let cantidad = parseInt(prompt(`Ingrese la cantidad del producto ${i}:`));
  productos.push({ producto, precio, cantidad });
}
const productosContainer = document.getElementById("productos-container");
productos.forEach((producto, index) => {
  const productoElement = document.createElement("p");
  productoElement.textContent = `Producto ${index + 1}: ${producto.producto}, Precio: ${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}`;
  productosContainer.appendChild(productoElement);
});*/

//Punto 2
/*let productos = [];
for (let i = 1; i <= 3; i++) {
  let producto = prompt(`Ingrese el nombre del producto ${i}:`);
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
  let cantidad = parseInt(prompt(`Ingrese la cantidad del producto ${i}:`));
  productos.push({ producto, precio, cantidad });
}
let totalPagar = 0;
productos.forEach(producto => {
  totalPagar += producto.precio * producto.cantidad;
});
const productosContainer = document.getElementById("productos-container");
productos.forEach((producto, index) => {
  const productoElement = document.createElement("p");
  productoElement.textContent = `Producto ${index + 1}: ${producto.producto}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`;
  productosContainer.appendChild(productoElement);
});
const totalPagarElement = document.getElementById("total-pagar");
totalPagarElement.textContent = `$${totalPagar}`;*/