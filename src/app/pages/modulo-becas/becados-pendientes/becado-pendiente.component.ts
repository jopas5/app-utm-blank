import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventosService } from 'src/app/services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl:'./becado-pendiente.component.html',
  styleUrls: ['./becado-pendiente.component.scss']
}) 
export class BecadoPendienteComponent implements OnInit {

  anio_inicio: any;
  Estadobeca: any[] = [];
  periodos: any[] = [];
  tab: number = 0;
  searchText: string = "";
  filteredEstadobeca: any[] = [];
  

  constructor(
    private router: Router,
    private api: ApiService,
    private eventos: EventosService,
    private fb: FormBuilder) { }

  
 //esta funcion borra.splice(item) 
 
  ngOnInit(): void {
    this.get_periodos();
  }

  obtener_estadobeca(anio_inicio: number) {
    this.eventos.loading(true);
    this.api.obtener_becados(anio_inicio)
      .subscribe((data: any) => {
        this.Estadobeca = data;
        this.filtrarEstadobeca();
        this.eventos.loading(false);
      }, (error) => {
        console.error('Error al obtener las personas:', error);
        this.eventos.loading(false);
      });
  }

  get_periodos() {
  this.api.get_lista_periodos().subscribe((data: any) => {
      this.periodos = data;
    }, (error) => {
      console.error('Error al obtener los periodos:', error);
  });
  }

  cargar_estadobeca(item: any) {
  this.api.obtener_Estado(item);
  this.router.navigate(['modulo_informacion_becas']); 
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
