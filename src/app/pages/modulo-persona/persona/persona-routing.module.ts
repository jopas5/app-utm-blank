import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PersonaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class PersonaRoutingModule { }
