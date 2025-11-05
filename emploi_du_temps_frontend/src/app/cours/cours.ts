import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cours.html',
  styleUrls: ['./cours.css']
})
export class Cours implements OnInit {
  cours: any[] = [];
  newCours: any = { nom: '' };
  showForm: boolean = false;
  showList: boolean = true;
  showModal: boolean = false;
  selectedCour: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCours().subscribe({
      next: (data) => this.cours = data,
      error: (err) => console.error(err)
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
  openModal(cour: any) {
    this.showModal = true;
    this.selectedCour = cour;
  }
  closeModal() {
    this.showModal = false;
    this.selectedCour = null;
  }
  ajouterCours() {
    //On appelle l'API pour ajouter le cours
    this.apiService.addCours(this.newCours).subscribe({
      next: (coursAjoute) => {
        this.cours.push(coursAjoute); //met à jour la liste affichée
        this.newCours = { nom: ''}; //reset du formulaire
        this.showForm = false;
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout", err);
      }
    });
  }
  supprimerCours() {
    if (!this.selectedCour) return;

    this.apiService.supprimerCours(this.selectedCour.id).subscribe({
      next: () => {
        this.cours = this.cours.filter(c => c.id !== this.selectedCour.id);
        this.closeModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression", err);
        this.closeModal();
      }
    });
  }
}
