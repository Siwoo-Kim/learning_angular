import {
  AfterViewInit,
  Component, ElementRef,
  Input,
  OnDestroy,
  OnInit, ViewChild
} from '@angular/core';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-ng-on-init-ng-on-destroy',
  template: `
    <h4>NgOnInit and NgOnDestroy</h4>
    <p>content: {{ content }}</p>
    <p #greeting>
      <span class="alert alert-success">Greeting Angular! </span>
    </p>
  `,
  styleUrls: ['./ng-on-init-ng-on-destroy.component.css']
})
export class NgOnInitNgOnDestroyComponent implements OnInit , OnDestroy, AfterViewInit {

  @Input() content : string;
  @ViewChild('greeting') greetingElement : ElementRef;

  constructor(private toasts:ToastsManager) {
    /*content is from the parent. when constructor is invoked content is null*/
    toasts.info(`isBinded in constructor?  ${this.content}`)
    toasts.info(`isBinded for the Element in constructor?  ${this.isInitiate()}`)
  }

  ngOnInit() {
    /*
      ngOnInit is invoked that component is initialized completely.
      In the case content already get data from parent
    */
    this.toasts.info(`isBinded in ngOnInit?  ${this.content}`)
    this.toasts.info(`isBinded for the Element in ngOnInit?  ${this.isInitiate()}`)
  }

  ngAfterViewInit(): void {
    /*
      ngAfterViewInit ensures that all components and element in view is rendered
    */
    this.toasts.info(`isBinded in ngOnInit?  ${this.content}`)
    this.toasts.info(`isBinded for the Element in ngAfterViewInit?  ${this.isInitiate()}`)
    console.log(this.greetingElement.nativeElement.querySelector('.alert'));

  }

  ngOnDestroy(){
    this.toasts.warning(`Component is destroyed. `);
  }

  isInitiate(){
    return this.greetingElement != null;
  }

}
