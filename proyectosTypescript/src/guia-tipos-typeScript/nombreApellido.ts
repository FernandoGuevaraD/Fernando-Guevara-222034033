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

console.log({miVehiculo});

if (miVehiculo.arrancarVehiculo) {
    miVehiculo.arrancarVehiculo();
} else {
    console.log("No se ha definido la función arrancarVehiculo.");
}

if(miSegundoVehiculo.agregarSuspension){
    miSegundoVehiculo.agregarSuspension()
}else{
    console.log("no se ha definido la función agregarSuspension.")
}

console.log({miTercerVehiculo});

console.log( miTercerVehiculo.caracteristicasArray[0][0]);

console.log(miTercerVehiculo.caracteristicasArray[2][1]);   

miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => { 
    console.log(caracteristica[0]);                                
});

miTercerVehiculo.caracteristicasArray.forEach((item) => { 
    console.log(item[1]);
})








