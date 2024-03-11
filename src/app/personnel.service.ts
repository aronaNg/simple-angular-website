import { Injectable } from '@angular/core';
import { Personnel } from 'src/models/Personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  Array : Personnel[] = []

  constructor() { }

  getPersonnels() : Personnel[] {
    this.Array = []

    this.Array.push(new Personnel(6,'NGOM','Pers', 'arona@gmail.com', './assets/img/6.png',"0709080706","bureau1","https://www.linkedin.com/in/aronangom/"))
    this.Array.push(new Personnel(6,'HOFFMANN','Pers', 'stan@gmail.com', './assets/img/6.png',"070806050412","bureau2","https://www.linkedin.com/in/stan-hoffmann/"))
    this.Array.push(new Personnel(6,'GUEYE','Pers', 'hamda@gmail.com','./assets/img/6.png',"0609080706","bureau3", "https://www.linkedin.com/in/gueye-moussa/"))
    this.Array.push(new Personnel(6,'NGOM','Pers', 'ibou@gmail.com', './assets/img/6.png',"0609653432","bureau4","https://www.linkedin.com/in/ibrahima-ngom/"))
    return this.Array

  }
}
