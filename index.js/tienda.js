alert('Bienvenido a la Tienda Online del Club Atlético Ayacucho.');

//ARRAY DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: 'Buzo',
        precio: 8000,
        cantidad: 25
    }
];

function Ropa(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

const zapatillas = { id: 2, nombre: 'Zapatillas', precio: 25000, cantidad: 20 };
console.log(zapatillas);
productos.push(zapatillas);
console.log(productos);


//CLASE CONSTRUCTORA
class Prendas {
    constructor() {
        this.id = productos.length + 1;
        this.nombre = prompt('Ingrese un producto');
        this.precio = parseInt(prompt('Ingrese un precio'));
        this.cantidad = prompt('Ingrese cantidad');

    }
}



//MENU INICIAL
let opciones = parseInt(prompt('- Ingresá 1 para agregar un producto\n- Ingresá 2 para ver productos disponibles\n- Ingresá 0 para salir'));



//FUNCIÓN PARA CREAR OBJETOS
const agregarProductos = () => {
    const prendaNueva = new Prendas();
    productos.push(prendaNueva);
    console.log(productos);
};

//FUNCION PARA MOSTRAR PRODUCTOS
const mostrarProductos = () => {
    console.log('Sus productos son:');
    productos.forEach((producto, index) => { console.log(index + 1), producto })
}


const eleccion = (opcion) => {

    switch (opcion) {

        case 1: agregarProductos();
        console.log(productos);

            break;

        case 2:
            mostrarProductos();
            console.log(productos);

            break;

        case 0:
            alert('Gracias por visitar nuestra tienda online!')
            break;

        default:
            alert('Número incorrecto, Intentalo de nuevo')

    }

    opciones = parseInt(prompt('- Ingresá 1 para agregar un producto\n- Ingresá 2 para ver productos disponibles\n- Ingresá 0 para salir'));
}

while (opciones !== 0) {
    opciones = parseInt(prompt('- Ingresá 1 para agregar un producto\n- Ingresá 2 para ver productos disponibles\n- Ingresá 0 para salir'));
}








