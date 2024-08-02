let codigos;
alert("Bienvenido al Hotel termal, a continuacion podras visualizar los codigos correspondientes a cada habitacion,\nTenelos en cuenta para pasar a la cotizacion.\n\n\n Habitacion Estandar vista interna, codigo: 200000\n Habitacion Estandar vista Garden, codigo: 220000\n Habitacion Superior vista Montaña, codigo:260000\n Habitacion Studio vista Montaña, codigo: 300000");

function cotizacion () {
    const numeroA = parseInt(prompt("Confirme codigo de habitacion elegida"));
    if(numeroA !=calculo) {
        alert("Los codigos no coinciden");
        return;
    } else{
        alert("ya casi estamos! por favor continua con el proximo paso");
    }    

    if(numeroA === 200000 || numeroA === 220000 || numeroA ===260000 || numeroA ===300000) {
        
    const numeroB = parseInt(prompt("Ingrese numero de noches de su estadia"));

        alert("cotizacion de su estadia $" + (numeroA * numeroB));
    } else{
        alert("Los codigos no coinciden");
    }

}



    let calculo;
do {
calculo=prompt("Ingrese codigo de la habitacion elegida\n\nPara salir, ingrese salir");

    switch (calculo) {
        case "salir":
            alert("Gracias por su visita, hasta la proxima!");
            break;
        
        case "200000":
            cotizacion();
            break;

        case "220000":
            cotizacion();
            break;

        case "260000":
            cotizacion();
            break;

        case "300000":
            cotizacion();
            break;
    
        default:
            alert("Ingresaste un codigo invalido")
            break;
    }
} while(calculo !== "salir");

const servicios = [
    {
        nombre: "Masajes relajantes full",
        precio: 15000,
        ExperienciaTermal: false,
    },
    {
        nombre: "Cena Bodega y maridajes",
        precio: 80000,
        ExperienciaTermal: true,
    },
    {
        nombre: "Full termal spa day",
        precio: 50000,
        ExperienciaTermal: true,
    },
    {
        nombre: "Evening late check out",
        precio: 120000,
        ExperienciaTermal: true,
    },

];


class servicio {
    constructor(nombre, precio, ExperienciaTermal){
        this.nombre= nombre;
        this.precio= precio;
        this.ExperienciaTermal= ExperienciaTermal;
    }
};

function adquirirServicio() {

    let cantidadDeServicios;

    do{
        const cantidadDeServicios=parseInt(prompt("Ingrese la cantidad de servicios que desea adquirir (minimo 1, maximo 3)"));

        if (cantidadDeServicios>0 && cantidadDeServicios<4) {
            for (let i =0; i < cantidadDeServicios; i++) {
                
            const nombreDelServicio= prompt("Ingrese nombre del servicio elegido. para salir ingrese salir");
            const precioDelServicio= parseInt(prompt("Ingrese precio del servicio elegido"));

             const nuevoServicio= new servicio(nombreDelServicio, precioDelServicio);
             servicios.push(nuevoServicio);
             alert("Agregaste\n" + nombreDelServicio + "\ncon éxito");
             
            };

            servicios.forEach (el=>{
                alert("Tu servicio elegido es \n" + el.nombre + "\ny tiene un valor de $\n" + el.precio);
             });    
        
             const total= servicios.reduce((acc,el)=>acc + el.precio ,0);
                alert("El costo total de tu/s servicio/s es de: $\n" + total); 
 
             

        } else {
            alert("Ingresa un valor valido");
        };   

    }while(cantidadDeServicios<1 ||cantidadDeServicios>3 || isNaN (cantidadDeServicios));
    


};


    

function ExperienciaTermal (ExperienciaTermal) {
    if(ExperienciaTermal){
        const experiencia= servicios.filter(Element=>Element.ExperienciaTermal);
        console.log("Servicios Experiencia Termal:", ExperienciaTermal);
        alert("Mira en consola los servicios Experiencia Termal");
    };
};

let opcion;

do { 
opcion=prompt("Bienvenido nuevamente! Este es el menu de nuestros servicios. Por favor Ingrese la opcion deseada\n\n\n1 Adquiri tus servicios favoritos .\n2 Ver todos nuestros servicios.\n3 Ver servicios Experiencia Termal .\n\nPara salir, ingrese salir.");

    switch (opcion) {
        case "salir":
            alert("Gracias por su visita, hasta la proxima!");
            break;
    
        case "1":
            adquirirServicio ();
            break;
        

        case "2":
            console.log(servicios);
            alert("Mira por consola todos nuestros servicios");
            break;
   
        case "3":
            ExperienciaTermal(true);
            break;
    
    
        default:
            alert("Ingresaste una opcion invalida")
            break;
    };

    
} while (opcion !== "salir");

