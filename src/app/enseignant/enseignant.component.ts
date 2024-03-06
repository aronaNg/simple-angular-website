import { Component, Input, OnInit } from '@angular/core';
import { Enseignant } from 'src/models/Enseignant';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  @Input() enseignant !: Enseignant
  @Input() ens_index !: number
  constructor() { }

  ngOnInit(): void {
  }

}
