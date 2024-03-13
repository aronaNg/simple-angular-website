import { Component,Input, OnInit } from '@angular/core';
import { Enseignant } from 'src/models/Enseignant';

@Component({
  selector: 'app-ajoutprofesseur',
  templateUrl: './ajoutprofesseur.component.html',
  styleUrls: ['./ajoutprofesseur.component.css']
})
export class AjoutprofesseurComponent implements OnInit {
  @Input() professeur !: Enseignant

  constructor() { }

  ngOnInit(): void {
  }

}
