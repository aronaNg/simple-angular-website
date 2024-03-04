import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product !: Product
  @Input() prd_index !: number

  constructor() { }

  ngOnInit(): void {
  }

}
