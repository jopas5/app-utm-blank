import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { modulo_informacion_becasComponent } from './modulo_informacin_becas.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: modulo_informacion_becasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class modulo_informacion_becasRoutingModule { }

