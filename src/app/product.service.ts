import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Array : Product[] = []

  constructor() { }

  getProducts() : Product[] {
    this.Array = []
    // this.Array.push(new Product(1,'Image 1', 'Ma description 1', 10, 'UTBM', 'https://placehold.jp/500x500.png'))
    // this.Array.push(new Product(2,'Image 2', 'Ma description 2', 0, 'Google', 'https://placehold.jp/500x500.png'))
    // this.Array.push(new Product(3,'Image 3', 'Ma description 3', 0, 'GE', 'https://placehold.jp/500x500.png'))
    // this.Array.push(new Product(4,'Image 4', 'Ma description 4', 40, 'TQS', 'https://placehold.jp/500x500.png'))
    this.Array.push(new Product(1,'Image 1', 'Ma description 5', 10, 'UTBM', './assets/img/1.png'))
    this.Array.push(new Product(2,'Image 2', 'Ma description 6', 0, 'Google', './assets/img/2.png'))
    this.Array.push(new Product(3,'Image 3', 'Ma description 7', 0, 'GE', './assets/img/3.png'))
    this.Array.push(new Product(5,'Image 4', 'Ma description 8', 40, 'TQS', './assets/img/5.png'))
    return this.Array
    
  }
}
