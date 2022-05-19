import { Component, OnInit } from '@angular/core';
import { ElementosAz, FormatoPeritaje, EstadoPintura } from './interfaces/formato-peritaje';

interface CalificacionesEstado {
  value: string;
  viewValue: string;
}
interface Estado {
  value: string;
  viewValue: string;
}
interface Clase {
  value: string;
  viewValue: string;
}
interface Combustible {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-formato-peritaje',
  templateUrl: './formato-peritaje.component.html',
  styleUrls: ['./formato-peritaje.component.scss']
})


export class FormatoPeritajeComponent implements OnInit {
  // public estadosPintura: EstadoPintura[] = [
  //  { puertaDelIzq : {
  //     repi : 0,
  //     repar : 0,
  //     cambioRemovido : 0,
  //   }}
  // ]
  //   { label: 'cat', value: '1', checked: true },
  //   { label: 'dog', value: '2', checked: false }
  // ];
  public elementos: ElementosAz[] = [
    { label: 'Air Bag', name: 'airBag',   value: 0},
    { label: 'Adhesivos Instalados', name: 'adhesivosInstalados' , value: 0},
    { label: 'Aire Acondicionado', name: 'aireAcondicionado' , value: 0},
    { label: 'Alarma', name: 'alarma' , value: 0},
    { label: 'Alineación de Dirección', name: 'alineacionDireccion' , value: 0},
    { label: 'Antena', name: 'antena' , value: 0},
    { label: 'Apoya Brazo', name: 'apoyaBrazo' , value: 0},
    { label: 'Babero', name: 'babero' , value: 0},
    { label: 'Base Caja de Dirección', name: 'baseCajaDireccion' , value: 0},
    { label: 'Batería', name: 'bateria' , value: 0},
    { label: 'Bocallantas', name: 'bocaLlantas' , value: 0},
    { label: 'Boceles Puerta', name: 'bocelesPuertas' , value: 0},
    { label: 'Bujes de Tijera', name: 'bujesTijera' , value: 0},
    { label: 'Bujes de Troque trasero', name: 'bujesTroqueTrasero' , value: 0},
    { label: 'Cabeceras con Pantallas', name: 'cabecerasConPantallas' , value: 0},
    { label: 'Cabeceras de Sillas', name: 'cabecerasSillas' , value: 0},
    { label: 'Caja Filtro del Aire', name: 'cajaFiltroAire' , value: 0},
    { label: 'Calefacción/Ventilación', name: 'calefaccionVentilacion' , value: 0},
    { label: 'Cámara', name: 'camara' , value: 0},
    { label: 'Carter', name: 'carter' , value: 0},
    { label: 'Compresor', name: 'compresor' , value: 0},
    { label: 'Control de Llave Deteriorado', name: 'controlLLaveDeteriorado' , value: 0},
    { label: 'Cuna Motor', name: 'cunaMotor' , value: 0},
    { label: 'Descansa Brazos', name: 'descansaBrazos' , value: 0},
    { label: 'Desgaste Irregular de Llantas', name: 'desgasteIrregularLlantas' , value: 0},
    { label: 'Dificil Inspección Visual', name: 'dificilInspeccionVisual' , value: 0},
    { label: 'Dirección Hidráulica', name: 'direccionHidraulica' , value: 0},
    { label: 'Direccional Derecha', name: 'direccionalDerecha' , value: 0},
    { label: 'Direccional Izquierda', name: 'direccionalIzquierda' , value: 0},
    { label: 'Disco Del Derecho', name: 'discoDelDerecho' , value: 0},
    { label: 'Disco Del Izquierdo', name: 'discoDelIzquierdo' , value: 0},
    { label: 'Disco Tras Der', name: 'discoTrasDer' , value: 0},
    { label: 'Disco Tras Izq', name: 'discoTrasIzq' , value: 0},
    { label: 'Elevadores de Vidrio', name: 'elevadoresVidrios' , value: 0},
    { label: 'Embrague Duro y/o Alto', name: 'embragueDuroAlto' , value: 0},
    { label: 'Empaque de las Puertas', name: 'empaquePuertas' , value: 0},
    { label: 'Encendedor', name: 'encendedor' , value: 0},
    { label: 'Encendido', name: 'encendido' , value: 0},
    { label: 'Espejo de Cortesia (Retrovisor)', name: 'espejoCortesia' , value: 0},
    { label: 'Espejo Retrovisor Der', name: 'espejoRetrovisorDer' , value: 0},
    { label: 'Espejo Retrovisor Izq', name: 'espejoRetrovisorIzq' , value: 0},
    { label: 'Espejos Eléctricos', name: 'espejoselectricos' , value: 0},
    { label: 'Espoiler Trasero', name: 'espoilerTrasero' , value: 0},
    { label: 'Exploradoras', name: 'exploradorasAZ' , value: 0},
    { label: 'Ext Tras Derecha de Punta', name: 'extenTrasDerPunta' , value: 0},
    { label: 'Exten Del Derecha de Punta', name: 'extenDelDerPunta' , value: 0},
    { label: 'Exten Tras Derecha de Punta', name: 'extenTrasIzqPunta' , value: 0},
    { label: 'Exten Del Izquierda de Punta', name: 'extenDelIzqPunta' , value: 0},
    { label: 'Farola Der (Incluye Talco)', name: 'farolaDerecha' , value: 0},
    { label: 'Farola Izq (Incluye Talco)', name: 'farolaIzquierda' , value: 0},
    { label: 'Frenos', name: 'frenos' , value: 0},
    { label: 'Fuga Caja', name: 'fugaCaja' , value: 0},
    { label: 'Fuga de Refrigerante', name: 'fugaRefrigerante' , value: 0},
    { label: 'Fuga Liquido de Frenos', name: 'fugaLiqFrenos' , value: 0},
    { label: 'Fuga Motor', name: 'fugaMotor' , value: 0},
    { label: 'Fugas Hidráulico', name: 'fugasHidraulico' , value: 0},
    { label: 'Gas Desinstalado', name: 'gasDesinstalado' , value: 0},
    { label: 'Gato Hidráulico Capo', name: 'gatoHidraulicoCapo' , value: 0},
    { label: 'Gato Hidráulico Maleta', name: 'gatoHidraulicoMaleta' , value: 0},
    { label: 'Guardapolvo Plastico Trasero', name: 'guardapolvosPlasticoTras' , value: 0},
    { label: 'Guardapolvo Plastico Delantero', name: 'guardapolvosPlasticoDel' , value: 0},
    { label: 'Herramientas de Desvare', name: 'herramientDesvare' , value: 0},
    { label: 'Lavada Chasis', name: 'lavadaChasis' , value: 0},
    { label: 'Lavada Cojinería', name: 'lavadaCojineria' , value: 0},
    { label: 'Lavada Desmanchar Pintura', name: 'lavadaDesmancharPintura' , value: 0},
    { label: 'Lavada Interior', name: 'lavadaInterior' , value: 0},
    { label: 'Lavada Sacar Olores', name: 'lavadaSacarOlores' , value: 0},
    { label: 'Llanta Del Der', name: 'llantaDelDer' , value: 0},
    { label: 'Llanta Del Izq', name: 'llantaDelIzq' , value: 0},
    { label: 'Llanta Repuesto', name: 'llantaRepuesto' , value: 0},
    { label: 'Llanta Tras Der', name: 'llantaTrasDer' , value: 0},
    { label: 'Llanta Tras Izq', name: 'llantaTrasIzq' , value: 0},
    { label: 'Luz Interna', name: 'luzInterna' , value: 0},
    { label: 'Luz Derecha', name: 'luzDerecha' , value: 0},
    { label: 'Luz Izquierda', name: 'luzIzquierda' , value: 0},
    { label: 'Mal de Mar', name: 'malMar' , value: 0},
    { label: 'Manija Puertas Del Der', name: 'manijaPuertaDelDer' , value: 0},
    { label: 'Manija Puertas Del Izq', name: 'manijaPuertaDelIzq' , value: 0},
    { label: 'Manija Puertas Tras Der', name: 'manijaPuertaTrasDer' , value: 0},
    { label: 'Manija Puertas Tras Izq', name: 'manijaPuertaTrasIzq' , value: 0},
    { label: 'Marcación de Seguridad', name: 'marcacionSeguridad' , value: 0},
    { label: 'Marcación Plaquetas Chasis', name: 'marcacionPlaquetaChasis' , value: 0},
    { label: 'Marcación Plaqueta de Motor', name: 'marcacionPlaquetaMotor' , value: 0},
    { label: 'Marcación Plaqueta Serial', name: 'marcacionPlaquetaSerial' , value: 0},
    { label: 'Millare', name: 'millare' , value: 0},
    { label: 'Mofle o Linea de Escape', name: 'mofleLineaEscape' , value: 0},
    { label: 'Pantalla de Radio', name: 'pantallaRadio' , value: 0},
    { label: 'Pantalla de reversa', name: 'pantallaReversa' , value: 0},
    { label: 'Parabrisas', name: 'parabrisas' , value: 0},
    { label: 'Parlantes', name: 'parlantes' , value: 0},
    { label: 'Pasta Del Der', name: 'pastaDelDer' , value: 0},
    { label: 'Pasta Del Izq', name: 'pastaDelIzq' , value: 0},
    { label: 'Pasta Tras Der', name: 'pastaTrasDer' , value: 0},
    { label: 'Pasta Tras Izq', name: 'pastaTrasIzq' , value: 0},
    { label: 'Persiana', name: 'persiana' , value: 0},
    { label: 'Pito', name: 'pito' , value: 0},
    { label: 'Plumilla Trasera', name: 'plumillaTrasera' , value: 0},
    { label: 'Plumillas Delanteras', name: 'plumillasDelanteras' , value: 0},
    { label: 'Polarizado', name: 'polarizado' , value: 0},
    { label: 'Pomo de la Palanca', name: 'pomoPalanca' , value: 0},
    { label: 'Portaequipajes', name: 'portaequipajes' , value: 0},
    { label: 'Protector de Carter', name: 'protectorCarter' , value: 0},
    { label: 'Protector de Motor', name: 'protectorMotor' , value: 0},
    { label: 'Publicidad Instalada', name: 'publicidadInstalada' , value: 0},
    { label: 'Punta Delantera Derecha', name: 'puntaDelDer' , value: 0},
    { label: 'Punta Delantera Izquierda', name: 'puntaDelIzq' , value: 0},
    { label: 'Punta Trasera Derecha', name: 'puntaTrasDer' , value: 0},
    { label: 'Punta Trasera Izquierda', name: 'puntaTrasIzq' , value: 0},
    { label: 'Radio', name: 'radio' , value: 0},
    { label: 'Reloj', name: 'reloj' , value: 0},
    { label: 'Retrovisor Der', name: 'retrovisorDer' , value: 0},
    { label: 'Retrovisor Izq', name: 'retrovisorIzq' , value: 0},
    { label: 'Rin Del Der', name: 'rinDelDer' , value: 0},
    { label: 'Rin Del Izq', name: 'rinDelIzq' , value: 0},
    { label: 'Rin Repuesto', name: 'rinRepuesto' , value: 0},
    { label: 'Rin Tras Der', name: 'rinTrasDer' , value: 0},
    { label: 'Rin Tras Izq', name: 'rinTrasIzq' , value: 0},
    { label: 'RPM Inestable', name: 'rpmInestable' , value: 0},
    { label: 'Ruido Aire', name: 'ruidoAire' , value: 0},
    { label: 'Ruido Anormal Motor', name: 'ruidoAnormalMotor' , value: 0},
    { label: 'Ruido Caja', name: 'ruidoCaja' , value: 0},
    { label: 'Ruido Cajonea Duro', name: 'ruidoCajoneaDuro' , value: 0},
    { label: 'Ruido de Mofle', name: 'ruidoMofle' , value: 0},
    { label: 'Ruido en el Turbo', name: 'ruidoTurbo' , value: 0},
    { label: 'Ruido en la Dirección', name: 'ruidoDireccion' , value: 0},
    { label: 'Ruido Frenos', name: 'ruidoFrenos' , value: 0},
    { label: 'Ruido Kit Accesorios', name: 'ruidoKitAccesorios' , value: 0},
    { label: 'Ruido Motor de Arranque', name: 'ruidoMotorArranque' , value: 0},
    { label: 'Ruido Soportes de Motor', name: 'ruidoSoportesMotor' , value: 0},
    { label: 'Ruido Suspensión Delantera', name: 'ruidoSuspensionDel' , value: 0},
    { label: 'Ruido Suspensión Trasera', name: 'ruidoSuspensionTras' , value: 0},
    { label: 'Seguros Electricos', name: 'segurosElectricos' , value: 0},
    { label: 'Sensor de Reversa', name: 'sensorReversa' , value: 0},
    { label: 'Sillas y Forros', name: 'sillasForros' , value: 0},
    { label: 'Soporte Motor', name: 'soporteMotor' , value: 0},
    { label: 'Stop Der', name: 'stopDer' , value: 0},
    { label: 'Stop Izq', name: 'stopIzq' , value: 0},
    { label: 'Tablero', name: 'tablero' , value: 0},
    { label: 'Tablero y Cuadro de Instrumentos', name: 'tableroCuadroInstrument' , value: 0},
    { label: 'Tapa de Gasolina', name: 'tapaGasolina' , value: 0},
    { label: 'Tapizado Pisos', name: 'tapizadoPisos' , value: 0},
    { label: 'Tapizado Techo', name: 'tapizadoTecho' , value: 0},
    { label: 'Tapizados Puertas Del', name: 'tapizadosPuertasDel' , value: 0},
    { label: 'TapizadosPuertas Tras', name: 'tapizadosPuertasTras' , value: 0},
    { label: 'Tarro de Agua', name: 'tarroAgua' , value: 0},
    { label: 'Techo Corredizo', name: 'techoCorredizo' , value: 0},
    { label: 'Tercer Stop', name: 'tercerStop' , value: 0},
    { label: 'Testigo Encendido ABS', name: 'testigoEncendidoAbs' , value: 0},
    { label: 'Testigos Encendidos de Batería', name: 'testigosEncendidosBateria' , value: 0},
    { label: 'Testigos Encendidos de Llantas', name: 'testigosEncendidosLlantas' , value: 0},
    { label: 'Testigos Encendidos Mantenimiento', name: 'testigosEncendidosMantenimiento' , value: 0},
    { label: 'Testigos Encendidos de Luz', name: 'testigosEncendidosLuz' , value: 0},
    { label: 'Testigos Encendidos de Motor', name: 'testigosEncendidosMotor' , value: 0},
    { label: 'Testigos Encendidos de Temp', name: 'testigosEncendidosTemp' , value: 0},
    { label: 'Tiro de arrastre Desinstalado', name: 'tiroArrastreDesinstalado' , value: 0},
    { label: 'Tijera Delantera Derecha', name: 'tijeraDelDer' , value: 0},
    { label: 'Tijera Delantera Izquierda', name: 'tijeraDelIzq' , value: 0},
    { label: 'Tijera Trasera Derecha', name: 'tijeraTrasDer' , value: 0},
    { label: 'Tijera Trasera Izquierda', name: 'tijeraTrasIzq' , value: 0},
    { label: 'Timón', name: 'timon' , value: 0},
    { label: 'Troque', name: 'troque' , value: 0},
    { label: 'Turbo (Incluye Prueba de Ruta)', name: 'turboPruebaRuta' , value: 0},
    { label: 'Valvuleo', name: 'valvuleo' , value: 0},
    { label: 'Vibración Anormal', name: 'vibracionAnormal' , value: 0},
    { label: 'Vidrios Eléctricos', name: 'vidriosElectricos' , value: 0},
    { label: 'Vidrio Lateral Malos', name: 'vidrioLateralMalos' , value: 0},
    { label: 'Vidrio Panorámico Delantero', name: 'vidrioPanoramicoDel' , value: 0},
    { label: 'Vidrio Panorámico Trasero', name: 'vidrioPanoramicoTras' , value: 0},
  
  ];


  
  A = 0;
  B = 1;
  si = 1;
  no = 0;
  automatica = 1;
  mecanica = 0;
  t4x2 = 0;
  t4x4 = 1;
  tela = 0;
  cuero = 1;
  repiTipoA = 0;
  repiTipoB = 1;
  reparTipoA = 0;
  reparTipoB = 1;
  cambiado = 0;
  removido = 1;
  malo = 0;
  noTiene = 1
  ok = 0;
  bajo = 1;
  leve = 0;
  fuerte = 1;


  selectedValue: string | undefined;
  selectedEstado: string | undefined;
  selectedClase: string | undefined;
  selectedCombustible: string | undefined;


  estados: Estado[] = [
    {value: '1', viewValue: 'Rayado Leve'}, //verificar si es string o number y cambiar en la interface según
    {value: '2', viewValue: 'Rayado Fuerte (Profundo)'},
    {value: '3', viewValue: 'Golpe Muy Leve'},
    {value: '4', viewValue: 'Golpe Fuerte (Deformado)'},
    {value: '5', viewValue: 'Descuadre'},
    {value: '6', viewValue: 'Corrosión'},
    {value: '7', viewValue: 'Fisurado'},
    {value: '8', viewValue: 'Pintura Manchado'},
    {value: '9', viewValue: 'Desengrafe'},
    {value: '10', viewValue: 'Reparado'},
    {value: '11', viewValue: 'Reparado B'},
    {value: '12', viewValue: 'Quebrado'},
    {value: '13', viewValue: 'Requiere Arreglo'},
  ];
  calificaciones: CalificacionesEstado[] = [
    {value: '5', viewValue: 'Nuevo'}, //verificar si es string o number y cambiar en la interface según
    {value: '4', viewValue: 'Muy Bueno'},
    {value: '3', viewValue: 'Defectos'},
    {value: '2', viewValue: 'Problemas'},
    {value: '1', viewValue: 'Malo'},
  ];

  clases: Clase[] = [
    {value: '0', viewValue: 'Sedan'},
    {value: '1', viewValue: 'Platon'},
    {value: '2', viewValue: 'QP'},
    {value: '3', viewValue: 'HB'},
    {value: '4', viewValue: 'Camioneta'},
    {value: '5', viewValue: 'Convertible'},
  ];
  combustibles: Combustible[] = [
    {value: '0', viewValue: 'Gasolina'},
    {value: '1', viewValue: 'Diesel'},
    {value: '2', viewValue: 'Gas'},
    {value: '3', viewValue: 'Hibrido'},
    {value: '4', viewValue: 'Eléctrico'},
   
  ];
  public data: FormatoPeritaje;

  constructor() { 
    this.data = {
      fecha : new Date,
      calificacion : 0,
      horaInicio : new Date,
      horaFinal : new Date,
      pruebaRuta : 0,
      nombreInspector : '',
      firmaInspector : '',
      calificacionEstado : '',
      placa : '',
      marca : '',
      linea : '',
      cilindraje : '',
      color : '',
      referencia : '',
      modelo : '',
      clase : '',
      combustible : '',
      lugarMatricula : '',
      capacidadSillas : 0,
      cojineria : 0,
      caja : 0,
      traccion : 0,
      kilometrajeActual : '',
      proxMantenimiento : new Date,
      rinLujo : 0,
      estriboLujo : 0,
      vidrioElectrico : 0,
      techoVidrio : 0,
      retrovisorElectrico : 0,
      numAirbag : 0,
      numRin : 0,
      barrasTecho : 0,
      exploradoras : 0,
      repuestoLlaves:  0,
      libroGarantia : 0,
      cambioCorrea : 0,
      lugarCambioCorrea : '',
      herramientaCompleta : 0,
      manuales : 0,
      reclamosAseguradora : 0,
      valorReclamo : 0,
      marcaRadio: '',
      marcaLlantas : '',
      marcaBateria : '',
      lugarMantenimiento : '',
      // estadoPintura : this.estadosPintura,
      codigoEstado : '',
      elementosAz : this.elementos,
      elementoRequiereIntervencion1 : '',
      valorAprox1 : 0,
      elementoRequiereIntervencion2 : '',
      valorAprox2 : 0,
      elementoRequiereIntervencion3 : '',
      valorAprox3 : 0,
      elementoRequiereIntervencion4 : '',
      valorAprox4 : 0,
      elementoRequiereIntervencion5 : '',
      valorAprox5 : 0,
      elementoRequiereIntervencion6 : '',
      valorAprox6 : 0,
      nivelLiqRefrigerante : 0,
      nivelAceite : 0,
      nivelLiqFrenos : 0,
      t4x4FuncionOkPruebaRuta : 0,
      cajaFuncionOkPruebaRuta : 0,
      motorFuncionOkPruebaRuta : 0,
      aceleraBienPruebaRuta : 0,
      frenadoFuncionaBien : 0,
      direccionFuncionaBien : 0,
      calculoAproxArreglosOk : 0,
      totalRequeridoOk : 0,
    }
    this.selectedValue = '';
    this.selectedClase = '';
  }

  ngOnInit(): void {
  }

  onSubmit(data: FormatoPeritaje){
    // console.log(this.data);

  }

}
