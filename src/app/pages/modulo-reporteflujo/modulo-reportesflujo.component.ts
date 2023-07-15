
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-persona',
  templateUrl:'./modulo-reportesflujo.component.html',
  styleUrls: ['./modulo-reportesflujo.component.scss']
}) 
export class moduloreportesflujoComponent implements OnInit {


  reportContent: string = 'https://192.168.2.95:5488/public-templates?access_token=2cc540df-80e2-4121-8252-61ea9abff844';
  catalogo_responsables: any =[];
  persona: any = {};
  personas: any[] = [];
  periodos: any[] = [];
  filtro: string = "";
  tab: number = 0;
  constructor(
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder
  ) { }

  
 //esta funcion borra.splice(item) 
 
  ngOnInit(): void {
    this.obtener_listado_periodos();
   
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
  obtener_listado_periodos() {
    this.api.get_lista_periodos()
      .subscribe((data : any) => {
        this.periodos = data;
      }, (error) => {
        console.error('Error al guardar el listado del periodo:', error);
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
