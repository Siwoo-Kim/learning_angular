import {
  Component,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector : 'recipe-header',
  templateUrl : './header.component.html',
  styles : [`
    .nav-tabs {
      background-color: cornsilk;
      font-size: 1.1em;
    }
    .header-nav {
      cursor: pointer;
      color: burlywood !important;
    }
  `]
})
export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();
  isSelected: string;

  onSelect(feature: string){
    this.isSelected = feature;
    this.featureSelected.emit(feature);
  }

}
