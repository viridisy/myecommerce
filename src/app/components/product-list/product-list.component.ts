import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[]=[];
  @Input() title: string="";

  nextCards() {
    // Move the first card to the end of the array (circular rotation)
    for(var i=0;i<6;i++){
    const firstCard = this.products.shift();
    this.products.push(firstCard);
    }
  }

  backCards() {
    // Move the first card to the end of the array (circular rotation)
    for(var i=0;i<6;i++){
    const lastCard = this.products.pop();
    this.products.unshift(lastCard);
    }
  }
}