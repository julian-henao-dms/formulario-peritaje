import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './interfaces/vehiculo';

interface CalificacionesEstado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {
 public A = 0;
 public B = 1;
 public  si = 1;
 public no = 0;

 public selectedValue: string | undefined;

 calificaciones: CalificacionesEstado[] = [
  {value: '5', viewValue: 'Nuevo'}, //verificar si es string o number y cambiar en la interface según
  {value: '4', viewValue: 'Muy Bueno'},
  {value: '3', viewValue: 'Defectos'},
  {value: '2', viewValue: 'Problemas'},
  {value: '1', viewValue: 'Malo'},
];

public data : Vehiculo;
  constructor() { 
    this.data = {
      Id : 0,
      Califica : '',
      Fecini : new Date,
      Id_usuario : 0,
      Id_usu_inspector : 0,
      Id_cot_item_lote : 0,
      Prueba_ruta : 0,
      Fecfin : new Date,
      Califica2 : 0,
    }
  }

  ngOnInit(): void {
  }

}
