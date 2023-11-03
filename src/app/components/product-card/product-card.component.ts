import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:any="";
  // Define the addToCart method
  addToCart(product: any) {
    // Implement the functionality to add the product to the cart
    console.log(`Added ${product.name} to the cart.`);
    // You can implement your cart logic here
  }
}
