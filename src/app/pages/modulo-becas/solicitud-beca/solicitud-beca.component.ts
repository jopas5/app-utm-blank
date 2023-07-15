import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-becas',
  templateUrl:'./solicitud-beca.component.html',
  styleUrls: ['./solicitud-beca.component.scss']
})
export class SolicitudBecaComponent implements OnInit {
  
  estudiantes: any[] = [];
  periodos: any[] = [];
  filtro: string = "";
  tab: number = 0;
  
  constructor(
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder) { }

  
 //esta funcion borra.splice(item) 
 
  ngOnInit(): void {
    this.get_lista_periodos();
  }

  get_lista_periodos() {
    this.api.get_lista_periodos().subscribe((data: any) => {
        this.periodos = data;
      }, (error) => {
        console.error('Error al obtener los periodos:', error);
    });
  }
  obtener_estudiantes(data:any) {
    this.api.get_estudiantes(data)
      .subscribe((data: any) => {
        this.estudiantes = data;
      }, (error) => {
        console.error('Error al obtener estudiantes:', error);
      });
  }




}
