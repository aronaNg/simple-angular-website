import { Injectable } from '@angular/core';
import { Enseignant } from 'src/models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  Array : Enseignant[] = []

  constructor() { }

  getEnseignants() : Enseignant[] {
    this.Array = []

    this.Array.push(new Enseignant(6,'NGOM','Pr', 'arona@gmail.com', './assets/img/6.png',"0709080706","bureau1","https://www.linkedin.com/in/aronangom/"))
    this.Array.push(new Enseignant(6,'HOFFMANN','Pr', 'stan@gmail.com', './assets/img/6.png',"070806050412","bureau2","https://www.linkedin.com/in/stan-hoffmann/"))
    this.Array.push(new Enseignant(6,'GUEYE','Pr', 'hamda@gmail.com','./assets/img/6.png',"0609080706","bureau3", "https://www.linkedin.com/in/gueye-moussa/"))
    this.Array.push(new Enseignant(6,'NGOM','Pr', 'ibou@gmail.com', './assets/img/6.png',"0609653432","bureau4","https://www.linkedin.com/in/ibrahima-ngom/"))
    return this.Array

  }
}
