export class Product {
    constructor(
        public id:number,
        public title : string,
        public description:string,
        public price:number,
        public company:string,
        public image:string,
    ){
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.company = company
        this.image = image
    }
}
