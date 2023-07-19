//Punto 4
/*var cupones = { 
    Cupon1: { cupon: "semana10", descuento: "20%", fecha_caducidad: "29-07-2023" },
    Cupon2: { cupon: "comprasmayores100", descuento: "10%", fecha_caducidad: "25-07-2023" },
    Cupon3: { cupon: "viernesloco", descuento: "15%", fecha_caducidad: "27-07-2023" }
  };
  var cuponesActualizados = {};
  for (var clave in cupones) {
    var cupon = cupones[clave];
    cuponesActualizados[clave] = { 
      nombre: cupon.cupon, 
      descuento: cupon.descuento, 
      fecha_caducidad: cupon.fecha_caducidad 
    };
  }
  document.write("<h1>Cupones Actualizados</h1>");
  for (var clave in cuponesActualizados) {
    var cupon = cuponesActualizados[clave];
    document.write("<p>Clave: " + clave + "</p>");
    document.write("<p>Nombre: " + cupon.nombre + "</p>");
    document.write("<p>Descuento: " + cupon.descuento + "</p>");
    document.write("<p>Fecha de caducidad: " + cupon.fecha_caducidad + "</p>");
  }*/

  //Punto 5
  /*var cupones = { 
    Cupon1: { cupon: "semana10", descuento: "20%", fecha_caducidad: "2023-07-29" },
    Cupon2: { cupon: "comprasmayores100", descuento: "10%", fecha_caducidad: "2023-07-25" },
    Cupon3: { cupon: "viernesloco", descuento: "15%", fecha_caducidad: "2023-07-27" }
  };
  var cuponesActualizados = {};
  for (var clave in cupones) {
    var cupon = cupones[clave];
    cuponesActualizados[clave] = { 
      nombre: cupon.cupon, 
      descuento: cupon.descuento, 
      fecha_caducidad: cupon.fecha_caducidad 
    };
    var fechaCaducidad = new Date(cupon.fecha_caducidad);
    var fechaActual = new Date();
    var diffTime = fechaCaducidad - fechaActual;
    var diasFaltantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    cuponesActualizados[clave]["dias_faltantes"] = diasFaltantes;
  }
  document.write("<h1>Cupones Actualizados</h1>");
  for (var clave in cuponesActualizados) {
    var cupon = cuponesActualizados[clave];
    document.write("<p>Clave: " + clave + "</p>");
    document.write("<p>Nombre: " + cupon.nombre + "</p>");
    document.write("<p>Descuento: " + cupon.descuento + "</p>");
    document.write("<p>Fecha de caducidad: " + cupon.fecha_caducidad + "</p>");
    document.write("<p>Días faltantes para caducar: " + cupon.dias_faltantes + " días</p>");
  }*/