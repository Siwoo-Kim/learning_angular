import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnChanges{
  @Input() myNumber : number;
  @Input() myString : string;
  @Input() data : { id : number , name : string };

  ngOnChanges(changes: SimpleChanges): void {
    /*
      SimpleChanges has one or more SimpleChange Object.
      When change is occured in property which is decorated by @Input(),
      It will catch the moment
    */
    if( changes['data'] && !changes['data'].isFirstChange()){
      console.log('Call external API...');
      setTimeout(() => { /* ... */ } , 2000);
    }
    /*
      pay super attention to the object.
      even if a property in the object is changed , ngOnChanges is not invoked
      if you want to invoke the ngOnChanges for changing in the object
      you should make new object!
    */
    console.dir(changes);

    for(let key in changes){
      let simpleChange = changes[key];

      if( key == 'data' ) {
        console.log(`Data Change : ${key} - ${JSON.stringify(simpleChange,null,2)}`)
      }else if(simpleChange.isFirstChange()){
        console.log(`First Change : ${key} - ${simpleChange.currentValue}`);
      } else {
        console.log(`Previous value : ${key} - ${simpleChange.previousValue} `)
        console.log(`Current value : ${key} - ${simpleChange.currentValue} `)
      }
    }
  }


}
