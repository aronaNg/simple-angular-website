import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/models/Etudiant';

@Component({
  selector: 'app-ajoutetudiant',
  templateUrl: './ajoutetudiant.component.html',
  styleUrls: ['./ajoutetudiant.component.css']
})
export class AjoutetudiantComponent implements OnInit {
  @Input() etudiant !: Etudiant

  constructor() { }

  ngOnInit(): void {
  }

}
