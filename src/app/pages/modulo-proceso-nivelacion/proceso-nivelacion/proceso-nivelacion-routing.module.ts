import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcesoNivelacionComponent } from './proceso-nivelacion.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProcesoNivelacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class ProcesoNivelacionRoutingModule { }
