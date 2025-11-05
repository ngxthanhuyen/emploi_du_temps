import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-profs',
  standalone: true,  
  imports: [CommonModule, FormsModule],
  templateUrl: './profs.html',
  styleUrl: './profs.css'
})
export class Profs implements OnInit{
  profs: any[] = [];
  newProf = {
    nom : '',
    prenom : ''
  };

  showForm: boolean = false;
  showList: boolean = false;
  showModal: boolean = false;
  selectedProf: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProfs().subscribe({
      next: (data) => {
      console.log('Données reçues :', data); 
      this.profs = data;     
    },
      error: (err) => {
        console.error('Erreur lors du fetch des profs', err);
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

  openModal(prof: any) {
    this.selectedProf = prof;
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
    this.selectedProf = null;
  }

  ajouterProf() {
    this.apiService.addProf(this.newProf).subscribe({
      next: (profAjoute) => {
        this.profs.push(profAjoute); //met à jour la liste affichée
        this.newProf = { nom: '', prenom: ''}; //reset du formulaire
        this.showForm = false;
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout", err);
      }
    });
  }
  supprimerProf() {
  if (this.selectedProf) {
    console.log("Suppression de l'id :", this.selectedProf.id);
    this.apiService.supprimerProf(this.selectedProf.id).subscribe({
      next: () => {
        this.profs = this.profs.filter(prof => prof.id !== this.selectedProf.id);
        this.closeModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression", err);
      }
    });
  } else {
    console.warn("Aucun professeur sélectionné");
  }
}

}

