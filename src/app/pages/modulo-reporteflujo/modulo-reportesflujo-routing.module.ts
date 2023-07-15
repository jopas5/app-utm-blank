import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { moduloreportesflujoComponent } from './modulo-reportesflujo.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: moduloreportesflujoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class moduloreportesflujoRoutingModule { }

