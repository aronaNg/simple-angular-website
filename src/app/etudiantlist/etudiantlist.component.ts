import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/models/Etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiantlist',
  templateUrl: './etudiantlist.component.html',
  styleUrls: ['./etudiantlist.component.css']
})
export class EtudiantlistComponent implements OnInit {
  EtudiantArray : Etudiant[] = []

  constructor(public service : EtudiantService) {
    this.EtudiantArray = service.getEtudiants()
  }

  ngOnInit(): void {

  }

}
