import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-becas',
  templateUrl:'./becado-no-aprobado.component.html',
  styleUrls: ['./becado-no-aprobado.component.scss']
})
export class BecadoNoAprobadoComponent implements OnInit {

  Estadobeca: any[] = [];
  persona: any = {};
  personas: any[] = [];
  filtro: string = "";
  tab: number = 0;
  searchText: string = "";
  filteredEstadobeca: any[] = [];

  constructor(
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder) { }

  
 //esta funcion borra.splice(item) 
 
  ngOnInit(): void {
    this.no_aprobados();
  }

  no_aprobados() {
    this.eventos.loading(true);
    this.api.no_aprobados()
      .subscribe((data: any) => {
        this.Estadobeca = data;
        this.filtrarEstadobeca();
        this.eventos.loading(false);
      }, (error) => {
        console.error('Error al obtener las personas:', error);
      });
  } 

filtrarEstadobeca() {
  this.filteredEstadobeca = this.Estadobeca.filter(item =>
    item.r_nombres.toLowerCase().includes(this.searchText.toLowerCase()) ||
    item.r_cedula.includes(this.searchText) ||
    item.r_escuela.toLowerCase().includes(this.searchText.toLowerCase()) ||
    item.r_tipo_discapacidad.toLowerCase().includes(this.searchText.toLowerCase()) ||
    item.r_tipo_becas.toLowerCase().includes(this.searchText.toLowerCase())||
    item.r_estado.toLowerCase().includes(this.searchText.toLowerCase()) 
  );
}
    
}
