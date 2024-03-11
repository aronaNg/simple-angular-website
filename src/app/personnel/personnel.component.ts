import { Component, Input, OnInit } from '@angular/core';
import { Personnel } from 'src/models/Personnel';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  @Input() personnel !: Personnel
  @Input() pers_index !: number
  constructor() { }

  ngOnInit(): void {
  }

}
