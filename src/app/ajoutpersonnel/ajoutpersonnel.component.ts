import { Component, Input, OnInit } from '@angular/core';
import { Personnel } from 'src/models/Personnel';

@Component({
  selector: 'app-ajoutpersonnel',
  templateUrl: './ajoutpersonnel.component.html',
  styleUrls: ['./ajoutpersonnel.component.css']
})
export class AjoutpersonnelComponent implements OnInit {
  @Input() personnel !: Personnel

  constructor() { }

  ngOnInit(): void {
  }

}
