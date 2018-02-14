import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export declare type Menus = 'not_selected'| 'product' | 'category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentMenu: Menus;
  @Output() onChangeMenu: EventEmitter<string> = new EventEmitter<string>();

  onClickMenu(menu: Menus,event: Event) {
    event.preventDefault();
    this.currentMenu = menu;
    this.onChangeMenu.emit(menu);
  }
}
