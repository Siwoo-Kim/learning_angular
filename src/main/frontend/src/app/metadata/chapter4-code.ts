
export const chapter4_code = [
  {
    "id" : "4-1",
    "title" : "databindingComponent.ts",
    "code" : "\n" +
    "<div>\n" +
    "  <h3>Greeting {{name}}!</h3>\n" +
    "  <span [hidden]=\"isHidden\">The span element is hidden</span>\n" +
    "  <button (click)=\"onEventHandler()\">Trigger Event</button>\n" +
    "</div>\n"
  },

  {
    "id" : "4-1-1",
    "title" : "eventComponent.ts",
    "code" : "\n" +
    "<button (click)=\"onClickHandler()\">Get data</button>\n" +
    "<input placeholder=\"Enter your name\" (input)=\"onInputHandler($event)\">\n" +
    "\n" +
    "<div>\n" +
    "  <span *ngIf=\"data\">{{data}}</span>\n" +
    "  <span *ngIf=\"name\">{{name}}</span>\n" +
    "</div>\n"
  },

  {
    "id" : "4-1-2",
    "title" : "attributeAndProperty.ts",
    "code" : " <div>\n" +
    "      <h3>Attribute And Property Binding</h3>\n" +
    "      <mat-form-field style=\"width: 100%\" >\n" +
    "      <input matInput type=\"text\" [value]=\"greeting\" [attr.value]=\"greeting\"\n" +
    "        (input)=\"onInputHandler($event)\"\n" +
    "      >\n" +
    "      </mat-form-field>\n" +
    "    </div>"
  },


  {
    "id" : "4-2-1",
    "title" : "structuralBinding.ts",
    "code" : "\n" +
    "        <mat-radio-button value=\"true\" (change)=\"isShow=radioButton1.value\" #radioButton1>Turn On</mat-radio-button>\n" +
    "        <mat-radio-button value=\"false\" (change)=\"isShow=radioButton2.value\" #radioButton2>Turn Off</mat-radio-button>\n" +
    "\n" +
    "        <p>\n" +
    "          State : <strong>{{isShow}}</strong>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <span *ngIf=\"isShow\" ><strong>State is turn on</strong></span>\n" +
    "        </p>"
  },

]
