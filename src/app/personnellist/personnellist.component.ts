import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/models/Personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnellist',
  templateUrl: './personnellist.component.html',
  styleUrls: ['./personnellist.component.css']
})
export class PersonnellistComponent implements OnInit {
  PersonnelArray : Personnel[] = []

  constructor(public service : PersonnelService) {
    this.PersonnelArray = service.getPersonnels()
  }

  ngOnInit(): void {

  }

}
