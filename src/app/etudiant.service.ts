import { Injectable } from '@angular/core';
import { Etudiant } from 'src/models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiant!: Etudiant

  Array : Etudiant[] = []

  constructor() { }

  getEtudiants() : Etudiant[] {
    this.Array = []

    this.Array.push(new Etudiant(1,'NGOM','Arona', 'arona@gmail.com', './assets/img/1.png',"0709080706",1, "https://www.linkedin.com/in/aronangom/"))
    this.Array.push(new Etudiant(2,'HOFFMANN','Stanilas', 'stan@gmail.com', './assets/img/2.png',"070806050412",0, "https://www.linkedin.com/in/stan-hoffmann/"))
    this.Array.push(new Etudiant(3,'GUEYE','Moussa', 'hamda@gmail.com','./assets/img/3.png',"0609080706",0, "https://www.linkedin.com/in/gueye-moussa/"))
    this.Array.push(new Etudiant(4,'NGOM','Ibrahima', 'ibou@gmail.com', './assets/img/4.png',"0609653432",4, "https://www.linkedin.com/in/ibrahima-ngom/"))
    return this.Array

  }
}
