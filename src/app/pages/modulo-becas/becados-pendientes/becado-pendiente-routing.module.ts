import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecadoPendienteComponent } from './becado-pendiente.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BecadoPendienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class BecadoPendienteRoutingModule { }

