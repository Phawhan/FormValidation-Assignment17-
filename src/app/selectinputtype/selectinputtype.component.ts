import { Component,Output,Input,EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-selectinputtype',
  templateUrl: './selectinputtype.component.html',
  styleUrls: ['./selectinputtype.component.scss']
})
export class SelectinputtypeComponent{
  addedElementPattern:any=/^[0-9]+[0-9]$/;              //variable to hold ragular expression pattern
  addTypes=["Number","String","Boolean","Hexadecimal"]; //array of acceptable input types
  addedElementValue:any;                                //variable to store added element value
  addedElementStatus : any = [];                 //variable to store added element validation status 

  dropDownForm = new FormGroup({                        //creating a new formgroup
    addElementValueControl : new FormControl(''),       //created new formcontrol for added value
    addElementControl:new FormControl('')               //created new formcontrol for selected type
  });
  
  @Output() addedElementValueEmitter = new EventEmitter<any>;     //sending the added value to app component
  @Output() addedElementStatusEmitter = new EventEmitter<any>;    //sending the added value status to app component
  @Input() index:number=0;
  @Input() additionalArray:any=[];                                     //variable to store added element

  
onInit(){
  this.addedElementStatus = false;                 //variable to store added element validation status 

}

selectedType(type:string){                              //Function invoking on keyup.tab to find which input type selected, sets required regular expression
  if(type=="Number"){
    this.addedElementPattern =/^[0-9]+[0-9]$/;
  }
  else if(type=="String"){
    this.addedElementPattern =/^[a-zA-Z]+[a-zA-Z]$/;
  }
  else if(type=="Boolean"){
    this.addedElementPattern =/[0-1]/;
  }
  else if(type=="Hexadecimal"){
    this.addedElementPattern =/^[a-f0-9]+[a-f0-9]$/;
  }
  // this.addedElementValue.push("");
  // this.addedElementStatus.push("");
  // console.log(this.addedElementValue,"values",this.addedElementStatus,"truessss", this.count,"count","index",this.index);
}
ngOnChanges(changes: { [property: string]: SimpleChange }) {
  // Extract changes to the input property by its name
  let change: SimpleChange = changes['index']; 
  console.log("display functionality is working"+ changes['index'].currentValue);
  this.index = changes['index'].currentValue;
  this.additionalArray= changes['additionalArray'].currentValue;
  console.log()
}

sendElement(){                                          //Function invoking on keyup.enter to validate entered data with selected type
  this.addedElementValue=this.dropDownForm.controls['addElementValueControl'].value;
  // console.log(this.addedElementValue,"arrayvalues");
  console.log(this.additionalArray,"additional Array","index  ",this.index)
  if(this.addedElementPattern.test(this.addedElementValue)){
    for(let item of this.additionalArray){
      if(item.id==this.index){
        item.elementValue=this.addedElementValue;
      }}
      console.log(this.additionalArray);
    // this.addedElementStatus[this.index]=true;
    this.addedElementStatusEmitter.emit(this.addedElementStatus);
    this.addedElementValueEmitter.emit(this.addedElementValue);
  }
  else{
    this.addedElementStatusEmitter.emit(this.addedElementStatus);
    this.addedElementStatus[this.index]=false;
  }
}

}
