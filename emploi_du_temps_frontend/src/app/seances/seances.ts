import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-seances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seances.html',
  styleUrls: ['./seances.css']
})

export class Seances implements OnInit {
  seances: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getSeances().subscribe({
      next: (data) => this.seances = data,
      error: (err) => console.error(err)
    });
  }
}
