import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private renderer: Renderer2) { }
  
  toggleBodyClass() {
    const body = document.body;
    if (body.classList.contains('sidebar-collapse')) {
      this.renderer.removeClass(body, 'sidebar-collapse');
    } else {
      this.renderer.addClass(body, 'sidebar-collapse');
    }
  }
  

}
