import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  title: string = 'Manager Product Application';

  searchProduct(productId: number) {
    console.log(productId);
  }

}
