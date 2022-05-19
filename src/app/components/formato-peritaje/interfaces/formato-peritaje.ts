export interface ElementosAz {
    label : string;
    name : string;
    value : number;
}

export interface atributoEstadoPintura {
        repi : number;
        repar : number;
        cambioRemovido : number;
    }
export interface EstadoPintura {
        puertaDelIzq : atributoEstadoPintura;
        guardafangoIzq : atributoEstadoPintura;
        paralPanoramicoizq : atributoEstadoPintura;
        bomperDel : atributoEstadoPintura;
        capo : atributoEstadoPintura;
        panelParafuego : atributoEstadoPintura;
        guardaPolvoMetIzq : atributoEstadoPintura;
        marcoFrontal : atributoEstadoPintura;
        guardaPolvoMetDer : atributoEstadoPintura;
        paralPanoramicoDer : atributoEstadoPintura;
        guardaFangoDelDer : atributoEstadoPintura;
        puertaDelDer : atributoEstadoPintura;
        paralCentralDer : atributoEstadoPintura;
        puertaTrasDer : atributoEstadoPintura;
        estriboDer : atributoEstadoPintura;
        naveDer : atributoEstadoPintura;
        bomperTras : atributoEstadoPintura;
        tapaBaul : atributoEstadoPintura;
        panelTras : atributoEstadoPintura;
        pisoBaul : atributoEstadoPintura;
        naveIzq : atributoEstadoPintura;
        estriboIzq : atributoEstadoPintura;
        puertaTrasIzq : atributoEstadoPintura;
        paralCentralIzq : atributoEstadoPintura;
        capota : atributoEstadoPintura;
        pisosCarroceriaExt : atributoEstadoPintura;
    }
    
export interface FormatoPeritaje {
    fecha : Date;
    calificacion : number;
    horaInicio : Date;
    horaFinal : Date;
    pruebaRuta : number;
    nombreInspector : string;
    firmaInspector : string;
    calificacionEstado : string;
    placa : string;
    marca : string;
    linea : string;
    cilindraje : string;
    color : string;
    referencia : string;
    modelo : string;
    clase : string;
    combustible : string;
    lugarMatricula : string;
    capacidadSillas : number;
    cojineria : number;
    caja : number;
    traccion : number;
    kilometrajeActual : string;
    proxMantenimiento : Date;
    rinLujo : number;
    estriboLujo : number;
    vidrioElectrico : number;
    techoVidrio : number;
    retrovisorElectrico : number;
    numAirbag : number;
    numRin : number;
    barrasTecho : number;
    exploradoras : number;
    repuestoLlaves:  number;
    libroGarantia : number;
    cambioCorrea : number;
    lugarCambioCorrea : string;
    herramientaCompleta : number;
    manuales : number;
    reclamosAseguradora : number;
    valorReclamo : number;
    marcaRadio: string;
    marcaLlantas : string;
    marcaBateria : string;
    lugarMantenimiento : string;
    // estadoPintura : EstadoPintura[];
    codigoEstado : string;
    elementosAz : ElementosAz[];
    elementoRequiereIntervencion1 : string;
    valorAprox1 : number;
    elementoRequiereIntervencion2 : string;
    valorAprox2 : number;
    elementoRequiereIntervencion3 : string;
    valorAprox3 : number;
    elementoRequiereIntervencion4 : string;
    valorAprox4 : number;
    elementoRequiereIntervencion5 : string;
    valorAprox5 : number;
    elementoRequiereIntervencion6 : string;
    valorAprox6 : number;
    nivelLiqRefrigerante : number;
    nivelAceite : number;
    nivelLiqFrenos : number;
    t4x4FuncionOkPruebaRuta : number;
    cajaFuncionOkPruebaRuta : number;
    motorFuncionOkPruebaRuta : number;
    aceleraBienPruebaRuta : number;
    frenadoFuncionaBien : number;
    direccionFuncionaBien : number;
    calculoAproxArreglosOk : number;
    totalRequeridoOk : number;
}

