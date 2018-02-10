import {
  Component,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {Child2Component} from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  @ViewChild(ChildComponent) child : ChildComponent;
   /*
      ViewChild decorator searchs the first element it match with argument
      Argument can be type or selector for css
   */

   words:string = '';

  onSayingWords(){
    console.log('this is called')
    this.child.getWords(this.words);
  }

  @ViewChildren(Child2Component) childs : QueryList<Child2Component>;
  numbers : number[];

  constructor(){
    this.numbers = [1, 2, 3];
  }

  checkAll(){
    console.log(this.childs);
        /*QueryList Object*/
    console.log(this.childs['__proto__']);
        /*QueryList prototype. many manipulate methods*/
    console.log(this.childs['_results']);
        /*Components in QueryList */

    this.childs.map( (child) => child.isChecked = true );
  }

  unCheckAll() {
    this.childs.map( (child) => child.isChecked = false );
  }

}
