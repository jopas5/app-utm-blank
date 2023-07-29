
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


  report: string ="http://localhost:5488/templates/rkJTnK2ce";
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
  obtener_listado_periodos() {
    this.api.get_lista_periodos()
      .subscribe((data : any) => {
        this.periodos = data;
      }, (error) => {
        console.error('Error al guardar el listado del periodo:', error);
      });
  }
  
    
}
