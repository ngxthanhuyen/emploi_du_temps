import { Component, signal } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Etudiants } from './etudiants/etudiants';
import { Cours } from './cours/cours';
import { Seances } from './seances/seances';

const routes: Routes = [
  { path: 'etudiants', component: Etudiants },
  { path: 'cours', component: Cours },
  { path: 'seances', component: Seances },
  { path: '', redirectTo: 'etudiants', pathMatch: 'full' } // page par défaut
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Emploi du temps');
}
