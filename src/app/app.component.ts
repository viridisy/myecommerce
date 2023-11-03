import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myecommerce';
  productData: any[] = [];
  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData() {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => res.json())
      .then((data) => {
        // Assuming the fetched data is an array of products
        this.productData = data;
        console.log(this.productData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}