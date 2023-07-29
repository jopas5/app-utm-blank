import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'login' },
  //{ path: 'login', component: LoginComponent},
  {
    path: '',
    component: FullComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      { 
        path: 'dashboard', 
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      
      { 
        path: 'objetivo_estrategico_institucional', 
        loadChildren: () => import('./pages/modulo-plan-operativo/objetivo-estrategico-institucional/objetivo-estrategico-institucional.module').then(m => m.ObjetivoEstrategicoInstitucionalModule) 
      },

      { 
        path: 'meta_acumulada_institucional', 
        loadChildren: () => import('./pages/modulo-persona/persona/persona.module').then(m => m.PersonaModule) 
      },
      ///MODULO BECA
      { 
        path: 'solicitud_beca', 
        loadChildren: () => import('./pages/modulo-becas/solicitud-beca/solicitud-beca.module').then(m => m.SolicitudBecaModule) 
      },

      { 
        path: 'solicitar_beca', 
        loadChildren: () => import('./pages/modulo-becas/solicitar-beca/solicitar-beca.module').then(m => m.SolicitarBecaModule) 
      },

      { 
        path: 'becados_aprobados', 
        loadChildren: () => import('./pages/modulo-becas/becados-aprobados/becado-aprobado.module').then(m => m.BecadoAprobadoModule) 
      },

      { 
        path: 'becados_no_aprobados', 
        loadChildren: () => import('./pages/modulo-becas/becados-no-aprobados/becado-no-aprobado.module').then(m => m.BecadoNoAprobadoModule) 
      },

      { 
        path: 'becados_pendientes', 
        loadChildren: () => import('./pages/modulo-becas/becados-pendientes/becado-pendiente.module').then(m => m.BecadoPendienteModule) 
      },

      { 
        path: 'estado_beca', 
        loadChildren: () => import('./pages/modulo-estado-beca/estado-beca/estado-beca.module').then(m => m.EstadobecaModule) 
      },

      { 
        path: 'modulo_excelencia', 
        loadChildren: () => import('./pages/modulo-becas/modulo-excelencia/modulo-excelencia.module').then(m => m.moduloexcelenciaModule) 
      },

      { 
        path: 'modulo_informacion_becas', 
        loadChildren: () => import('./pages/modulo_informacion_becas/modulo-excelencia/modulo_informacion_becas.module').then(m => m.modulo_informacion_becasModule)
      },

      { 
        path: 'modulo_reporte_flujo', 
        loadChildren: () => import('./pages/modulo-reporteflujo/modulo-reportesflujo.module').then(m => m.moduloreportesflujoModule)
      },

      { 
        path: 'proceso_nivelacion', 
        loadChildren: () => import('./pages/modulo-proceso-nivelacion/proceso-nivelacion/proceso-nivelacion.module').then(m => m.ProcesoNivelacionModule)
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
