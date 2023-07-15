import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-persona',
  templateUrl:'./modulo-excelencia.component.html',
  styleUrls: ['./modulo-excelencia.component.scss']
}) 
export class moduloexcelenciaComponent implements OnInit {



  catalogo_responsables: any =[];
  persona: any = {};
  personas: any[] = [];
  filtro: string = "";
  tab: number = 0;
  constructor(
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder) { }

  
 //esta funcion borra.splice(item) 
 
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
    nombres: '',
    Nivel: '',
    Escuela: '',
    Discapacidad: '',
    Tipo_Becas: '',
    Acciones:''
  };
}
    
}
