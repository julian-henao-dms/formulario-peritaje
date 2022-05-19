import { Component, OnInit } from '@angular/core';
import { FormatoPeritaje } from './interfaces/formato-peritaje';

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
  // public elementsOptionsAZ: any = [
  //   { label: 'cat', value: '1', checked: true },
  //   { label: 'dog', value: '2', checked: false }
  // ];
  public elementos: any = [
    { label: 'Air Bag', name: 'airBag' },
    { label: 'Adhesivos Instalados', name: 'adhesivosInstalados' },
    { label: 'Aire Acondicionado', name: 'aireAcondicionado' },
    { label: 'Alarma', name: 'alarma' },
    { label: 'Alineación de Dirección', name: 'alineacionDireccion' },
    { label: 'Antena', name: 'antena' },
    { label: 'Apoya Brazo', name: 'apoyaBrazo' },
    { label: 'Babero', name: 'babero' },
    { label: 'Base Caja de Dirección', name: 'baseCajaDireccion' },
    { label: 'Batería', name: 'bateria' },
    { label: 'Bocallantas', name: 'bocaLlantas' },
    { label: 'Boceles Puerta', name: 'bocelesPuertas' },
    { label: 'Bujes de Tijera', name: 'bujesTijera' },
    { label: 'Bujes de Troque trasero', name: 'bujesTroqueTrasero' },
    { label: 'Cabeceras con Pantallas', name: 'cabecerasConPantallas' },
    { label: 'Cabeceras de Sillas', name: 'cabecerasSillas' },
    { label: 'Caja Filtro del Aire', name: 'cajaFiltroAire' },
    { label: 'Calefacción/Ventilación', name: 'calefaccionVentilacion' },
    { label: 'Cámara', name: 'camara' },
    { label: 'Carter', name: 'carter' },
    { label: 'Compresor', name: 'compresor' },
    { label: 'Control de Llave Deteriorado', name: 'controlLLaveDeteriorado' },
    { label: 'Cuna Motor', name: 'cunaMotor' },
    { label: 'Descansa Brazos', name: 'descansaBrazos' },
    { label: 'Desgaste Irregular de Llantas', name: 'desgasteIrregularLlantas' },
    { label: 'Dificil Inspección Visual', name: 'dificilInspeccionVisual' },
    { label: 'Dirección Hidráulica', name: 'direccionHidraulica' },
    { label: 'Direccional Derecha', name: 'direccionalDerecha' },
    { label: 'Direccional Izquierda', name: 'direccionalIzquierda' },
    { label: 'Disco Del Derecho', name: 'discoDelDerecho' },
    { label: 'Disco Del Izquierdo', name: 'discoDelIzquierdo' },
    { label: 'Disco Tras Der', name: 'discoTrasDer' },
    { label: 'Disco Tras Izq', name: 'discoTrasIzq' },
    { label: 'Elevadores de Vidrio', name: 'elevadoresVidrios' },
    { label: 'Embrague Duro y/o Alto', name: 'embragueDuroAlto' },
    { label: 'Empaque de las Puertas', name: 'empaquePuertas' },
    { label: 'Encendedor', name: 'encendedor' },
    { label: 'Encendido', name: 'encendido' },
    { label: 'Espejo de Cortesia (Retrovisor)', name: 'espejoCortesia' },
    { label: 'Espejo Retrovisor Der', name: 'espejoRetrovisorDer' },
    { label: 'Espejo Retrovisor Izq', name: 'espejoRetrovisorIzq' },
    { label: 'Espejos Eléctricos', name: 'espejoselectricos' },
    { label: 'Espoiler Trasero', name: 'espoilerTrasero' },
    { label: 'Exploradoras', name: 'exploradorasAZ' },
    { label: 'Ext Tras Derecha de Punta', name: 'extenTrasDerPunta' },
    { label: 'Exten Del Derecha de Punta', name: 'extenDelDerPunta' },
    { label: 'Exten Tras Derecha de Punta', name: 'extenTrasIzqPunta' },
    { label: 'Exten Del Izquierda de Punta', name: 'extenDelIzqPunta' },
    { label: 'Farola Der (Incluye Talco)', name: 'farolaDerecha' },
    { label: 'Farola Izq (Incluye Talco)', name: 'farolaIzquierda' },
    { label: 'Frenos', name: 'frenos' },
    { label: 'Fuga Caja', name: 'fugaCaja' },
    { label: 'Fuga de Refrigerante', name: 'fugaRefrigerante' },
    { label: 'Fuga Liquido de Frenos', name: 'fugaLiqFrenos' },
    { label: 'Fuga Motor', name: 'fugaMotor' },
    { label: 'Fugas Hidráulico', name: 'fugasHidraulico' },
    { label: 'Gas Desinstalado', name: 'gasDesinstalado' },
    { label: 'Gato Hidráulico Capo', name: 'gatoHidraulicoCapo' },
    { label: 'Gato Hidráulico Maleta', name: 'gatoHidraulicoMaleta' },
    { label: 'Guardapolvo Plastico Trasero', name: 'guardapolvosPlasticoTras' },
    { label: 'Guardapolvo Plastico Delantero', name: 'guardapolvosPlasticoDel' },
    { label: 'Herramientas de Desvare', name: 'herramientDesvare' },
    { label: 'Lavada Chasis', name: 'lavadaChasis' },
    { label: 'Lavada Cojinería', name: 'lavadaCojineria' },
    { label: 'Lavada Desmanchar Pintura', name: 'lavadaDesmancharPintura' },
    { label: 'Lavada Interior', name: 'lavadaInterior' },
    { label: 'Lavada Sacar Olores', name: 'lavadaSacarOlores' },
    { label: 'Llanta Del Der', name: 'llantaDelDer' },
    { label: 'Llanta Del Izq', name: 'llantaDelIzq' },
    { label: 'Llanta Repuesto', name: 'llantaRepuesto' },
    { label: 'Llanta Tras Der', name: 'llantaTrasDer' },
    { label: 'Llanta Tras Izq', name: 'llantaTrasIzq' },
    { label: 'Luz Interna', name: 'luzInterna' },
    { label: 'Luz Derecha', name: 'luzDerecha' },
    { label: 'Luz Izquierda', name: 'luzIzquierda' },
    { label: 'Mal de Mar', name: 'malMar' },
    { label: 'Manija Puertas Del Der', name: 'manijaPuertaDelDer' },
    { label: 'Manija Puertas Del Izq', name: 'manijaPuertaDelIzq' },
    { label: 'Manija Puertas Tras Der', name: 'manijaPuertaTrasDer' },
    { label: 'Manija Puertas Tras Izq', name: 'manijaPuertaTrasIzq' },
    { label: 'Marcación de Seguridad', name: 'marcacionSeguridad' },
    { label: 'Marcación Plaquetas Chasis', name: 'marcacionPlaquetaChasis' },
    { label: 'Marcación Plaqueta de Motor', name: 'marcacionPlaquetaMotor' },
    { label: 'Marcación Plaqueta Serial', name: 'marcacionPlaquetaSerial' },
    { label: 'Millare', name: 'millare' },
    { label: 'Mofle o Linea de Escape', name: 'mofleLineaEscape' },
    { label: 'Pantalla de Radio', name: 'pantallaRadio' },
    { label: 'Pantalla de reversa', name: 'pantallaReversa' },
    { label: 'Parabrisas', name: 'parabrisas' },
    { label: 'Parlantes', name: 'parlantes' },
    { label: 'Pasta Del Der', name: 'pastaDelDer' },
    { label: 'Pasta Del Izq', name: 'pastaDelIzq' },
    { label: 'Pasta Tras Der', name: 'pastaTrasDer' },
    { label: 'Pasta Tras Izq', name: 'pastaTrasIzq' },
    { label: 'Persiana', name: 'persiana' },
    { label: 'Pito', name: 'pito' },
    { label: 'Plumilla Trasera', name: 'plumillaTrasera' },
    { label: 'Plumillas Delanteras', name: 'plumillasDelanteras' },
    { label: 'Polarizado', name: 'polarizado' },
    { label: 'Pomo de la Palanca', name: 'pomoPalanca' },
    { label: 'Portaequipajes', name: 'portaequipajes' },
    { label: 'Protector de Carter', name: 'protectorCarter' },
    { label: 'Protector de Motor', name: 'protectorMotor' },
    { label: 'Publicidad Instalada', name: 'publicidadInstalada' },
    { label: 'Punta Delantera Derecha', name: 'puntaDelDer' },
    { label: 'Punta Delantera Izquierda', name: 'puntaDelIzq' },
    { label: 'Punta Trasera Derecha', name: 'puntaTrasDer' },
    { label: 'Punta Trasera Izquierda', name: 'puntaTrasIzq' },
    { label: 'Radio', name: 'radio' },
    { label: 'Reloj', name: 'reloj' },
    { label: 'Retrovisor Der', name: 'retrovisorDer' },
    { label: 'Retrovisor Izq', name: 'retrovisorIzq' },
    { label: 'Rin Del Der', name: 'rinDelDer' },
    { label: 'Rin Del Izq', name: 'rinDelIzq' },
    { label: 'Rin Repuesto', name: 'rinRepuesto' },
    { label: 'Rin Tras Der', name: 'rinTrasDer' },
    { label: 'Rin Tras Izq', name: 'rinTrasIzq' },
    { label: 'RPM Inestable', name: 'rpmInestable' },
    { label: 'Ruido Aire', name: 'ruidoAire' },
    { label: 'Ruido Anormal Motor', name: 'ruidoAnormalMotor' },
    { label: 'Ruido Caja', name: 'ruidoCaja' },
    { label: 'Ruido Cajonea Duro', name: 'ruidoCajoneaDuro' },
    { label: 'Ruido de Mogle', name: 'ruidoMofle' },
    { label: 'Ruido en el Turbo', name: 'ruidoTurbo' },
    { label: 'Ruido en la Redirección', name: 'ruidoDireccion' },
    { label: 'Ruido Frenos', name: 'ruidoFrenos' },
    { label: 'Ruido Kit Accesorios', name: 'ruidoKitAccesorios' },
    { label: '', name: 'ruidoMotorArranque' },
    { label: '', name: 'ruidoSoportesMotor' },
    { label: '', name: 'ruidoSuspensionDel' },
    { label: '', name: 'ruidoSuspensionTras' },
    { label: '', name: 'segurosElectricos' },
    { label: '', name: 'sensorReversa' },
    { label: '', name: 'sillasForros' },
    { label: '', name: 'soporteMotor' },
    { label: '', name: 'stopDer' },
    { label: '', name: 'stopIzq' },
    { label: '', name: 'tablero' },
    { label: '', name: 'tableroCuadroInstrument' },
    { label: '', name: 'tapaGasolina' },
    { label: '', name: 'tapizadoPisos' },
    { label: '', name: 'tapizadoTecho' },
    { label: '', name: 'tapizadosPuertasDel' },
    { label: '', name: 'tapizadosPuertasTras' },
    { label: '', name: 'tarroAgua' },
    { label: '', name: 'techoCorredizo' },
    { label: '', name: 'tercerStop' },
    { label: '', name: 'testigosEncendidosBateria' },
    { label: '', name: 'testigosEncendidosLlantas' },
    { label: '', name: 'testigosEncendidosMantenimiento' },
    { label: '', name: 'testigosEncendidosLuz' },
    { label: '', name: 'testigosEncendidosMotor' },
    { label: '', name: 'testigosEncendidosTemp' },
    { label: '', name: 'tiroArrastreDesinstalado' },
    { label: '', name: 'tijeraDelDer' },
    { label: '', name: 'tijeraDelIzq' },
    { label: '', name: 'tijeraTrasDer' },
    { label: '', name: 'tijeraTrasIzq' },
    { label: '', name: 'timon' },
    { label: '', name: 'troque' },
    { label: '', name: 'turboPruebaRuta' },
    { label: '', name: 'valvuleo' },
    { label: '', name: 'vibracionAnormal' },
    { label: '', name: 'vidriosElectricos' },
    { label: '', name: 'vidrioLateralMalos' },
    { label: '', name: 'vidrioPanoramicoDel' },
    { label: '', name: 'vidrioPanoramicoTras' },
  
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
  // public data: FormatoPeritaje;

  constructor() { 
    // this.data = {}
    this.selectedValue = '';
    this.selectedClase = '';
  }

  ngOnInit(): void {
  }

  onSubmit(data: FormatoPeritaje){
    // console.log(this.data);

  }

}
