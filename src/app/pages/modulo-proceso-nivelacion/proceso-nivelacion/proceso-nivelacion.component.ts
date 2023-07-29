import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-informacion-beca', 
  templateUrl: './proceso-nivelacion.component.html',
  styleUrls: ['./proceso-nivelacion.component.scss']
})
export class ProcesoNivelacionComponent implements OnInit {

  objetivos_estrategicos: any = [];

  objetivo_estrategico: any = {
    anio_inicio: null,
  };

  demoValue = 0;
  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');







  cedula: any = "1350285209"
  persona: any = {};
  personas: any[] = [];
  filtro: string = "";
  tab: number = 0;
  constructor(
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder) { }

  

  ngOnInit(): void {
    this.obtener_personas();
  }

   obtener_personas() {
    this.api.obtener_Personas()
      .subscribe((data: any) => {
        this.personas = data;
      }, (error) => {
        console.error('Error al obtener las personas:', error);
      });
  }
  guardar_Persona() {
    this.api.guardar_Personas(this.persona)
      .subscribe(() => {
        alert('Persona guardada correctamente');
        this.persona = {};
      }, (error) => {
        console.error('Error al guardar la persona:', error);
      });
  }
  limpiarFormulario() {
  this.persona = {
    cedula: '',
    nombre: '',
    fecha_nacimiento: '',
    direccion: '',
    telefono: ''
  };
}
    
}
