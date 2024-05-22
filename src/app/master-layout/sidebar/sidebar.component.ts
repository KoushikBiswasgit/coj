import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  menuItems: any[] = [
    { 
      label: 'Home', 
      link: '/',
      submenu: [],
      menu: false 
    },
    { 
      label: 'Products', 
      link: '/products',
      submenu: [],
      menu: false
    },
    {
      label: 'Custom Menu',
      link: '/custom-menu',
      submenu: [
        {
          childLabel: 'Link 1',
          childLink: '/',
          childSubmenu: [
            {
              childSubLabel: 'Sublink 1',
              childSubLink: '/'
            },
            {
              childSubLabel: 'Sublink 2',
              childSubLink: '/'
            }
          ],
          menu: false
        },
        {
          childLabel: 'Link 2',
          childLink: '/',
          childSubmenu: [
            {
              childSubLabel: 'Sublink 3',
              childSubLink: '/'
            }
          ],
          menu: false
        },
        {
          childLabel: 'Link 3',
          childLink: '/',
          childSubmenu: [],
          menu: false
        }
      ],
      menu: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Method to toggle the dropdown menu for parent items
  ddToggle(index: number) {
    this.menuItems[index].menu = !this.menuItems[index].menu;
  }

  // Method to toggle the dropdown menu for child items
  ddToggleChild(parentIndex: number, childIndex: number) {
    this.menuItems[parentIndex].submenu[childIndex].menu = !this.menuItems[parentIndex].submenu[childIndex].menu;
  }
}
