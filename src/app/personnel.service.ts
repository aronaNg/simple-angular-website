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

    this.Array.push(new Personnel(7,'NGOM','Pers', 'arona@gmail.com', './assets/img/7.png',"0709080706","bureau1","service1","https://www.twitter.com/aronangom/"))
    this.Array.push(new Personnel(7,'HOFFMANN','Pers', 'stan@gmail.com', './assets/img/7.png',"070806050412","bureau2","service2","https://www.twitter.com/stan-hoffmann/"))
    this.Array.push(new Personnel(7,'GUEYE','Pers', 'moussa@gmail.com','./assets/img/7.png',"0609080706","bureau3","service3", "https://www.twitter.com/gueye-moussa/"))
    this.Array.push(new Personnel(7,'NGOM','Pers', 'ibou@gmail.com', './assets/img/7.png',"0609653432","bureau4","service4","https://www.twitter.com/ibrahima-ngom/"))
    return this.Array

  }
}
