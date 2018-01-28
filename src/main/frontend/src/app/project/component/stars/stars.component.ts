import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styles: ['.starrating  { color : #d17581;}']
})
export class StarsComponent implements OnInit {
  private _rating : number;
  private stars: boolean[];
  private maxStars: number = 5;

  @Input()
  readonly :boolean = true;

  @Input()
  get rating():number{
    return this._rating;
  }

  set rating(value:number){
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true,0,this.rating);
  }

  @Output()
  ratingChange : EventEmitter<number> = new EventEmitter<number>();

  fillStarsWithColor(index){
    if(!this.readonly){
      this.rating = index+ 1;
      this.ratingChange.emit(this.rating);
    }
  }
  ngOnInit(): void {
  }
}
