//desarrollo
// primero se hace la creación de interfaces.
interface tipoVehiculo {
    tipo: String;
    marca: String;
    modelo: String;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspeciales: caracteristicasEspeciales [];
}

interface caracteristicasEspeciales {
    velocidad:number;
    suspension: boolean;
    agregarSuspension: () =>void;
}

interface testArray {
    modelos: number[];
    caracteristicasArray: Array<string[]>;
}


const miVehiculo: Partial <tipoVehiculo> = {
    cilindraje: 2000,
    arrancarVehiculo(): void {
        console.log("El vehiculo arranco con un motor de "+this.cilindraje+" cc")
    },
}

const miSegundoVehiculo: Partial <caracteristicasEspeciales> = {
    suspension:false,
    agregarSuspension() {
        if(this.suspension==true)
            console.log("Tu vehiculo tiene suspensión")
        else{
            console.log(" Tu vehiculo no tiene suspensión.")
        }
    },
}

const miTercerVehiculo: testArray = {
    modelos : [2000,2001,2002,2003,2004],
    caracteristicasArray: [
        [" azul "," verde "],
        [" Rin 15 "," rin 17 "],
        [" 2 puertas "," 4 puertas "]
    ]
}

// objeto 1

console.log({miVehiculo});

// toca hacerlo así por la razón de que tengo en el objeto a Partial para que no coloque problema por no definir todas las vari

if (miVehiculo.arrancarVehiculo) {
    miVehiculo.arrancarVehiculo();
} else {
    console.log("No se ha definido la función arrancarVehiculo.");
}

// objeto 2

if(miSegundoVehiculo.agregarSuspension){
    miSegundoVehiculo.agregarSuspension()
}else{
    console.log("no se ha definido la función agregarSuspension.")
}

// objeto 3

console.log({miTercerVehiculo});

//Imprime un índice especifico del objeto miTercerObjeto, accede a la propiedad empleando la 
//notación caracteristicasArray[ ][ ] obtén en la impresión de consola los valores: azul. 

console.log( miTercerVehiculo.caracteristicasArray[0][0]);

// ahora imprimir 4 puertas

console.log(miTercerVehiculo.caracteristicasArray[2][1]);   

miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => { // caracteristica es una variable que yo defino nomas.
    console.log(caracteristica[0]);                                 // se imprime la columna 0 de cada Array
});

miTercerVehiculo.caracteristicasArray.forEach((item) => { // se imprime la primer columna de cada Array
    console.log(item[1]);
})








