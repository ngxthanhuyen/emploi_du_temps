import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-etudiants',
  standalone: true,  
  imports: [CommonModule, FormsModule], 
  templateUrl: './etudiants.html',
  styleUrls: ['./etudiants.css']
})
export class Etudiants implements OnInit {
  etudiants: any[] = [];
  showForm: boolean = false;
  showList: boolean = false;
  showModal: boolean = false;
  selectedEtudiant: any = null;

  newEtudiant = {
    nom : '',
    prenom : '',
    dateNaissance: '',
    classe: ''
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //au démarrage, on charge la liste depuis le backend
    this.apiService.getEtudiants().subscribe({
      next: (data) => {
      console.log('Données reçues :', data); 
      this.etudiants = data;     
    },
      error: (err) => {
        console.error('Erreur lors du fetch des étudiants', err);
      }
    });
  }
  toggleForm() {
    //on inverse l'affichage
    this.showForm = !this.showForm;
  }

  toggleList() {
    //on inverse l'affichage
    this.showList = !this.showList;
  }

  ajouterEtudiant() {
    //On appelle l'API pour ajouter l'étudiant
    this.apiService.addEtudiant(this.newEtudiant).subscribe({
      next: (etudiantAjoute) => {
        this.etudiants.push(etudiantAjoute); //met à jour la liste affichée
        this.newEtudiant = { nom: '', prenom: '', dateNaissance: '', classe: ''}; //reset du formulaire
        this.showForm = false;
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout", err);
      }
    });
  }
  openModal(etudiant: any) {
    this.selectedEtudiant = etudiant;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedEtudiant = null;
  }
  supprimerEtudiant() {
    if (this.selectedEtudiant) {
      this.apiService.supprimerEtudiant(this.selectedEtudiant.id).subscribe({
        next: () => {
          this.etudiants = this.etudiants.filter(e => e.id !== this.selectedEtudiant.id);
          this.closeModal();
        },
        error: (err) => {
          console.error("Erreur lors de la suppression", err);
        }
      });
    }
  }
}