import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecadoNoAprobadoComponent } from './becado-no-aprobado.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BecadoNoAprobadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class BecadoNoAprobadoRoutingModule { }
