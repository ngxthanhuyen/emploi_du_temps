import { Routes } from '@angular/router';
import { Etudiants } from './etudiants/etudiants';
import { Profs } from './profs/profs';
import { Cours } from './cours/cours';
import { Seances } from './seances/seances';

export const routes: Routes = [
    { path: 'etudiants', component: Etudiants },
    { path: 'profs', component: Profs} ,
    { path: 'cours', component: Cours },
    { path: 'seances', component: Seances },
    { path: '', redirectTo: 'etudiants', pathMatch: 'full' }
];
