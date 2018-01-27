import {Component, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

  constructor(private toastr:ToastsManager,vRef:ViewContainerRef){ this.toastr.setRootViewContainerRef(vRef); }
}
