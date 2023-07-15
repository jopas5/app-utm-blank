import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadobecaComponent } from './estado-beca.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: EstadobecaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class PersonaRoutingModule { }
