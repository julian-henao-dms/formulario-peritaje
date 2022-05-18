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
