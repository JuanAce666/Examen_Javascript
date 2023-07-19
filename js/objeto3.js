/*let productos = [];
for (let i = 1; i <= 3; i++) {
  let producto = prompt(`Ingrese el nombre del producto ${i}:`);
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
  let cantidad = parseInt(prompt(`Ingrese la cantidad del producto ${i}:`));
  productos[i - 1] = { producto, precio, cantidad };
}
let totalPagar = 0;
productos.forEach((producto) => {
  totalPagar += producto.precio * producto.cantidad;
});
const ivaPorcentaje = 16;
let totalIva = totalPagar * (1 + ivaPorcentaje / 100);
const productosContainer = document.getElementById("productos-container");
productos.forEach((producto, index) => {
  const productoElement = document.createElement("p");
  productoElement.innerText = `Producto ${index + 1}: ${
    producto.producto
  }, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`;
  productosContainer.appendChild(productoElement);
});
const totalPagarElement = document.getElementById("total-pagar");
const totalIvaElement = document.getElementById("total-iva");
totalPagarElement.appendChild(document.createTextNode(`$${totalPagar}`));
totalIvaElement.appendChild(document.createTextNode(`$${totalIva}`));*/
