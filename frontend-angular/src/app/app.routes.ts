import { provideRouter, Routes } from '@angular/router';

import { CarreraComponent } from './components/carreras/carreras';

import { EstudiantesComponent } from './components/estudiantes/estudiantes';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [{
    path: '', redirectTo: 'registros', pathMatch: 'full'
},

{
    path: 'registros', component: CarreraComponent
},
    
{
    path: 'estudiantes', component: EstudiantesComponent,

}];

