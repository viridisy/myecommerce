import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  content?: string;
  constructor(private userService: UserService){}
  productData: any[] = [];
  ngOnInit() {
    this.fetchProductData();
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
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
