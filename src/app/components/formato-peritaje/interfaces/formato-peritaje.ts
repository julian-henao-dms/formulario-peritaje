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
    estadoPintura : EstadoPintura;
    codigoEstado : string;
    airBag : number;
    adhesivosInstalados : number;
    aireAcondicionado : number;
    alarma : number;
    alineacionDireccion : number;
    antena : number;
    apoyaBrazo : number;
    barbero : number;
    baseCajaDireccion : number;
    bateria : number;
    bocaLlantas : number;
    bocelesPuertas : number;
    bujesTijera : number;
    bujesTroqueTrasero : number;
    cabecerasConPanttalas : number;
    cabecerasSillas : number;
    cajaFiltroAire : number;
    calefaccionVentilacion : number;
    camara : number;
    carter : number;
    compresor : number;
    controlLLaveDeteriorado : number;
    cunaMotor : number;
    descansaBrazos : number;
    desgasteIrregularLlantas : number;
    dificilInspeccionVisual : number;
    direccionHidraulica : number;
    direccionalDerecha : number;
    direccionalIzquierda : number;
    discoDelDerecho : number;
    discoDelIzquierdo : number;
    discoTrasDer : number;
    discoTrasIzq : number;
    elevadoresVidrios : number;
    embragueDuroAlto : number;
    empaquePuertas : number;
    encendedor : number;
    encendido : number;
    espejoRetrovisorDer : number;
    espejoRetrovisorIzq : number;
    espejoselectricos : number;
    espoilerTrasero : number;
    exploradorasAZ : number;
    extenTrasDerPunta : number;
    extenDelsDerPunta : number;
    extenTrasIzqPunta : number;
    extenDelsIzqPunta : number;
    farolaDerecha : number;
    farolaIzquierda : number;
    frenos : number;
    fugaCaja : number;
    fugaRefrigerante : number;
    fugaLiqFrenos : number;
    fugaMotor : number;
    fugasHidraulico : number;
    gasDesinstalado : number;
    gatoHidraulicoCapo : number;
    gatoHidraulicoMaleta : number;
    guardapolvosPlasticoTras : number;
    guardapolvosPlasticoDel : number;
    herramientDesvare : number;
    lavadaChasis : number;
    lavadaCojineria : number;
    lavadaDesmancharPintura : number;
    lavadaInterior : number;
    lavadaSacarOlores : number;
    llantaDelDer : number;
    llantaDelIzq : number;
    llantaRepuesto : number;
    llantaTrasDer : number;
    llantaTrasIzq : number;
    luzInterna : number;
    luzDerecha : number;
    luzIzquierda : number;
    malMar : number;

    elementosAdicionales : ElementosAdicionales[];

    nivelLiqRefrigerante : number;
}


export interface ElementosAdicionales {
    elementoRequiereIntervencion : string;
    valorAprox : number;
}