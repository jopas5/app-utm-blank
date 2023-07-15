import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudBecaComponent } from './solicitud-beca.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SolicitudBecaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class SolicitudBecaRoutingModule { }
