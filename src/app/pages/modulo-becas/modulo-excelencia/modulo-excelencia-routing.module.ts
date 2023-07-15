import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { moduloexcelenciaComponent } from './modulo-excelencia.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: moduloexcelenciaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class moduloexcelenciaRoutingModule { }

