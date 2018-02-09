import {Injectable} from "@angular/core";

export class CheckItem{
  constructor(
    public id:number,
    public content:string,
    public isChecked:boolean
    ){}
}

@Injectable()
export class CheckListService{
  private checkList: CheckItem[] = [];

  constructor() { }

  initCheckList(total:number){
    for(let i=0; i< total ; i++){
      const checkItem = new CheckItem(i+1,this.getContent(i+1),false);
      this.checkList.push(checkItem);
    }
    return this.checkList;
  }

  // manipulate array by the operator
  operate(operator:string){
    if(operator === '+'){
      const count = this.checkList.length;
      const newCheck = new CheckItem(count+1,this.getContent(count+1),false);
      this.checkList.push(newCheck);
    }else if ( operator === '-'){
      this.checkList.pop();
    }
  }

  check(checkItem:CheckItem){
    this.checkList[checkItem.id-1] = checkItem;
  }

  uncheck(id:number){
    this.checkList[id-1].isChecked = false;
  }

  //Calculate the ration (checkedCount / totalCount)
  getRatio(): string{
    const curCnt = this.checkList.filter(i => i.isChecked).length;
    const totalCnt = this.checkList.length;
    console.log(`${Math.round(curCnt/totalCnt) * 100} %`);
    return `${Math.round(curCnt/totalCnt) * 100} %`
  }

  private getContent(id:number) :string{
    return `check list ${id}`
  }


}
