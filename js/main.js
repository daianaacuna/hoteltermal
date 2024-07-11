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