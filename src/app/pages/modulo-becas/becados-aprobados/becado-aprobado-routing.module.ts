import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecadoAprobadoComponent } from './becado-aprobado.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BecadoAprobadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class BecadoAprobadoRoutingModule { }
