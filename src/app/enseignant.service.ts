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

    this.Array.push(new Enseignant(8,'NGOM','Pr', 'arona@gmail.com', './assets/img/8.png',"0709080708","bureau1","https://www.linkedin.com/in/aronangom/"))
    this.Array.push(new Enseignant(8,'HOFFMANN','Pr', 'stan@gmail.com', './assets/img/8.png',"0708050412","bureau2","https://www.linkedin.com/in/stan-hoffmann/"))
    this.Array.push(new Enseignant(8,'GUEYE','Pr', 'hamda@gmail.com','./assets/img/8.png',"0809080708","bureau3", "https://www.linkedin.com/in/gueye-moussa/"))
    this.Array.push(new Enseignant(8,'NGOM','Pr', 'ibou@gmail.com', './assets/img/8.png',"0609653432","bureau4","https://www.linkedin.com/in/ibrahima-ngom/"))
    return this.Array

  }
}
