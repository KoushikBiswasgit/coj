import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isCollapsed = true; // Variable to track navbar collapse state

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed; // Toggle collapse state
  }


}
