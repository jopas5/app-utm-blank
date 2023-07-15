import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-persona',
  templateUrl:'./modulo_informacion_becas.component.html',
  styleUrls: ['./modulo_informacion_becas.component.scss']
}) 
export class modulo_informacion_becasComponent implements OnInit {

  item: any = this.api.datos_persona;
  beca: any[] = [];
  filtro: string = "";
  tab: number = 0;
  constructor(
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder) { }

  
 //esta funcion borra.splice(item) 
 
  ngOnInit(): void {
    this.cargar_estadobeca();
  }

  cargar_estadobeca() {
  this.api.obtener_Estado2().subscribe((data: any) => {
    this.beca = data;
  }, (error) => {
    console.error('Error al obtener las personas:', error);
  });
}
    
}
