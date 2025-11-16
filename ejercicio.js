let articulos = [ 
    { "codigo": 1, "descripcion": "mouse Inalámbrico", "precio": 25.99, "tipo": "Periféricos" },
    { "codigo": 2, "descripcion": "teclado Mecánico", "precio": 49.99, "tipo": "Periféricos" },
    { "codigo": 3, "descripcion": "Monitor 24 pulgadas", "precio": 179.99, "tipo": "Electrónica" },
    { "codigo": 4, "descripcion": "Disco duro externo 1TB", "precio": 89.99, "tipo": "Electrónica" },
    { "codigo": 5, "descripcion": "Auriculares con micrófono", "precio": 34.99, "tipo": "Periféricos" },
    { "codigo": 6, "descripcion": "Cable HDMI 2m", "precio": 12.99, "tipo": "Accesorios" },
    { "codigo": 7, "descripcion": "Cargador USB-C", "precio": 19.99, "tipo": "Accesorios" },
    { "codigo": 8, "descripcion": "lámpara LED de escritorio", "precio": 29.99, "tipo": "Mobiliario" },
    { "codigo": 9, "descripcion": "Silla ergonómica", "precio": 199.99, "tipo": "Mobiliario" },
    { "codigo": 10, "descripcion": "webcam Full HD", "precio": 69.99, "tipo": "Electrónica" },
    { "codigo": 11, "descripcion": "Tarjeta de memoria 128GB", "precio": 24.99, "tipo": "Accesorios" },
    { "codigo": 12, "descripcion": "Base para laptop ajustable", "precio": 39.99, "tipo": "Mobiliario" },
    { "codigo": 13, "descripcion": "Router WiFi 6", "precio": 129.99, "tipo": "Electrónica" },
    { "codigo": 14, "descripcion": "Impresora multifuncional", "precio": 249.99, "tipo": "Electrónica" },
    { "codigo": 15, "descripcion": "smartwatch deportivo", "precio": 59.99, "tipo": "Electrónica" },
    { "codigo": 16, "descripcion": "Cámara de seguridad inalámbrica", "precio": 99.99, "tipo": "Electrónica" },
    { "codigo": 17, "descripcion": "Micrófono de condensador", "precio": 74.99, "tipo": "Periféricos" },
    { "codigo": 18, "descripcion": "Controlador MIDI", "precio": 119.99, "tipo": "Periféricos" },
    { "codigo": 19, "descripcion": "altavoz Bluetooth Portátil", "precio": 45.99, "tipo": "Electrónica" },
    { "codigo": 20, "descripcion": "Kit de herramientas para PC", "precio": 18.99, "tipo": "Accesorios" }
];

// apartado 1
// filtrar el array y devolver solo los que coinciden
function filtrartipoyprecio(articulos, tipo, precioMax) {
    return articulos.filter(a => a.tipo === tipo && a.precio <= precioMax);
}

console.log("electronica y precio <= 75");
console.log(filtrartipoyprecio(articulos, "Electrónica", 75));

// apartado 2
// recorrer articulos y modificar su descripcion
function descescripciones(articulos) {
    return articulos.map(a => {
        a.descripcion = a.descripcion.charAt(0).toUpperCase() + a.descripcion.slice(1).toLowerCase();
        return a;
    });
}

console.log("descripciones");
console.log(descescripciones(articulos));

// apartado 3
function buscarcadena(articulos, cadena) {
    // convierte la cadena de busqueda a minusculas
    cadena = cadena.toLowerCase();

    // filtra articulos en que su descripcion incluya la cadena
    return articulos.filter(a => a.descripcion.toLowerCase().includes(cadena));
}

console.log("buscar led");
console.log(buscarcadena(articulos, "led"));

// apartado 4
function cantidadtipo(articulos, tipo) {
    //filtra articulos por tipo
    const filtrados = articulos.filter(a => a.tipo === tipo);

    // cantidad de articulos
    const cantidad = filtrados.length;

    // calcula el precio medio
    const preciomedio = cantidad > 0 
        ? (filtrados.reduce((sum, a) => sum += a.precio, 0) / cantidad).toFixed(2)
        : 0;

    return { cantidad, preciomedio: Number(preciomedio) };
}

console.log("cantidad electronica");
console.log(cantidadtipo(articulos, "Electrónica"));

// apartado 5
// ordena articulos por precio
function ordenarprecios(articulos, orden = "asc") {
    return articulos.sort((a, b) => orden === "asc" ? a.precio - b.precio : b.precio - a.precio);
}

console.log("orden ascendente");
console.log(ordenarprecios([...articulos], "asc"));

console.log("orden descendente");
console.log(ordenarprecios([...articulos], "desc"));