import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitarBecaComponent } from './solicitar-beca.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SolicitarBecaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class SolicitarBecaRoutingModule { }
