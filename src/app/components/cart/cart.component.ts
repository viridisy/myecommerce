import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productData: any[] = [];
  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData() {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => {
        // Assuming the fetched data is an array of products
        for(let i=0;i<data.length;i++)
          this.productData+=data[i].products;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      
  }
  
}
