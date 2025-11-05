import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; // le backend

  constructor(private http: HttpClient) { }

  //Étudiants
  getEtudiants(): Observable<any> {
    return this.http.get(`${this.baseUrl}/etudiants`);
  }
  addEtudiant( body: {nom:string; prenom:string}) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/etudiants`, body, { headers });
  }
  supprimerEtudiant(id: number) {
    return this.http.delete(`${this.baseUrl}/etudiants/${id}`);
  }

  // Profs
  getProfs(): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/professeurs`); }
  addProf(body: {nom:string; prenom:string}) { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/professeurs`, body, { headers }); 
  }
  supprimerProf(id: number) {
    return this.http.delete(`${this.baseUrl}/professeurs/${id}`);
  }

  //Cours
  getCours(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cours`);
  }
  addCours( body: {titre:string; professeurId:number; etudiantIds:number[]}) {
    return this.http.post(`${this.baseUrl}/cours`, body);
  }
  supprimerCours(id: number) {
    return this.http.delete(`${this.baseUrl}/cours/${id}`)
  }

  //Seances
  getSeances(): Observable<any> {
    return this.http.get(`${this.baseUrl}/seances`);
  }
  addSeance( body: {coursId: number; debut: string; fin: string; salle: string}) {
    return this.http.post(`${this.baseUrl}/seances`, body); 
  }
}
