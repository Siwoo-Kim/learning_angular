import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective /*implements OnInit*/{
  @HostBinding('style.backgroundColor') backgroundColor: string;
  /* an attribute of the host element */
  @Input() defaultColor:string;
  @Input() highlightColor:string;
  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = 'transparent';
/*    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue' /!* ,important tag*!/ );*/
  }

  /*an argument is one of the dom's events*/
  @HostListener('mouseenter') mouseover(eventData: Event){
    /*this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');*/
    this.backgroundColor = this.highlightColor;
  }

  /*an argument is one of the dom's events*/
  @HostListener('mouseleave') mouseleave(eventData: Event){
    /*this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');*/
    this.backgroundColor = this.defaultColor;
  }
}
