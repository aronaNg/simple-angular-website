import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/models/Enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-enseignantlist',
  templateUrl: './enseignantlist.component.html',
  styleUrls: ['./enseignantlist.component.css']
})
export class EnseignantlistComponent implements OnInit {
  EnseignantArray : Enseignant[] = []

  constructor(public service : EnseignantService) {
    this.EnseignantArray = service.getEnseignants()
  }

  ngOnInit(): void {

  }

}
