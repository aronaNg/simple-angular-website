import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/models/Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  @Input() etudiant !: Etudiant
  @Input() etd_index !: number

  constructor() { }

  ngOnInit(): void {
  }

}
