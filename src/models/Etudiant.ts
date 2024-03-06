import { publicDecrypt } from "crypto"

export class Etudiant {
    constructor(
        public id:number,
        public nom : string,
        public prenom:string,
        public email:string,
        public image:string,
        public telephone:string,
        public compteAlumini:number,
        public link?:string,
    ){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.image = image
        this.telephone = telephone
        this.compteAlumini = compteAlumini
        this.link = link
    }
}
