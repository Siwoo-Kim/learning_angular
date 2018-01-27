import {Code} from "../model/code";
import {Input, OnInit} from "@angular/core";
import {Chapter511Component} from "../component/chapter-5-startpoint/chapter5/components/chapter5-1-1/chapter5-1-1.component";
import {ToastsManager} from "ng2-toastr";
import {Chapter512Component} from "../component/chapter-5-startpoint/chapter5/components/chapter5-1-2/chapter5-1-2.component";

export var chapter5_code:Code[] = [
  {
    id : 1, chapter : 5,
    title : 'OrderComponent.ts',
    code : 'export class Chapter511Component implements OnInit {\n' +
    '  @Input() menuName:string;\n' +
    '  @Input() menuPrice:number;\n' +
    '\n' +
    '  constructor() { }\n' +
    '\n' +
    '  ngOnInit() {\n' +
    '  }\n'
  },
  {
    id : 2, chapter : 5,
    title : 'ParentComponent.html',
    code : '  <mat-input-container>\n' +
    '          <input matInput type="text" placeholder="Enter Menu" (input)="onMenuHandler($event)" >\n' +
    '        </mat-input-container>\n' +
    '        <app-chapter5-1-1 [menuName]="menu" [menuPrice]="2.32"  ></app-chapter5-1-1>\n' +
    '    '
  },
  {
    id : 3, chapter : 5,
    title : 'GetOrderComponent.ts',
    code : '\n' +
    'export class Chapter512Component implements OnInit {\n' +
    '  stockQuantity:number;\n' +
    '  _requestQuantity:number;\n' +
    '  isOrdered:boolean;\n' +
    '\n' +
    '\n' +
    '  @Input()\n' +
    '  set requestQuantity(quantity:number){\n' +
    '    if(quantity == null) { return; }\n' +
    '\n' +
    '    this._requestQuantity = quantity;\n' +
    '\n' +
    '    if(this.stockQuantity < this._requestQuantity){\n' +
    '      this.isOrdered = false;\n' +
    '      this.toastr.warning("Order Request is rejected");\n' +
    '      return;\n' +
    '    }\n' +
    '\n' +
    '    this.isOrdered = true;\n' +
    '    this.toastr.info("Order is successful");\n' +
    '  }\n' +
    '\n' +
    '  get requestQuantity(){\n' +
    '    return this._requestQuantity;\n' +
    '  }\n' +
    '\n' +
    '  constructor(private toastr:ToastsManager) {\n' +
    '    this.stockQuantity = 10;\n' +
    '  }'
  },
  {
    id : 4, chapter : 5,
    title : 'GetOrderComponent.html',
    code : '  <mat-card-content>\n' +
    '    <p>Your request quantity is <strong>{{requestQuantity}}</strong>\n' +
    '     and order is\n' +
    '      <span *ngIf="isOrdered;else reject"><strong>Complete</strong></span>\n' +
    '      <ng-template #reject><strong>Rejected</strong></ng-template></p>\n' +
    '  </mat-card-content>'
  },
]
