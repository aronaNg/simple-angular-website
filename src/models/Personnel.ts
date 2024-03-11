import { publicDecrypt } from "crypto"

export class Personnel {
    constructor(
        public id:number,
        public nom : string,
        public prenom:string,
        public email:string,
        public image:string,
        public telephone:string,
        public bureau:string,
        public service:string,
        public compteTwitter?:string,

    ){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.image = image
        this.telephone = telephone
        this.bureau = bureau
        this.service = service                                                                    
        this.compteTwitter = compteTwitter
    }
}
