import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { DisplayComponent } from '../display/display.component';
import { UserDataRegisterationService } from '../user-data-registeration.service';

@Component({
  selector: 'app-registerationform',
  templateUrl: './registerationform.component.html',
  styleUrls: ['./registerationform.component.scss']
})
export class RegisterationformComponent {
  count:number=0;
  person : any={
    additionalArray:[]
  };                                                                  //Instance for storing one entry // additionalComponent : any;
  additionalItemIndex=0;
  namePattern = /^[a-zA-Z]+[a-zA-Z]$/;                                //Regular expression for validating Firstname and Lastname
  userNamePattern = /^[a-zA-Z]+[A-Za-z0-9_-]/;                        //Regular expression for validating Username
  agePattern = /[0-9]/;                                               //Regular expression for validating Age
  mailIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Regular expression for validating Mail Id
  phoneNumberPattern = /[0-9\+\-\ ]/;                                 //Regular expression for validating Phone Number
  addedElement : any;                                                 //Variable for storing additional element
  addedElementValue:any=[];                                           //variable for stroting additional element value
  submitStatus :any=[];                                               //Boolean variable to store Common component status
  
  formData = new FormGroup({                                          // Creating new Form group
    firstNameControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.namePattern), Validators.minLength(3),Validators.maxLength(256)])),
    // Created a form control instance for Firstname
    lastNameControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.namePattern), Validators.minLength(3),Validators.maxLength(256)])),
    // Created a form control instance for Lastname
    userNameControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.userNamePattern), Validators.minLength(3),Validators.maxLength(15)])),
    // Created a form control instance for Username
    ageControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.agePattern), Validators.max(999), Validators.min(1)])),
    // Created a form control instance for Age
    mailIdControl : new FormControl("", Validators.compose([ Validators.required, Validators.pattern(this.mailIdPattern)])),
    // Created a form control instance for Mail Id
    phoneNumberControl : new FormControl("", Validators.compose([ Validators.required, Validators.pattern(this.phoneNumberPattern), Validators.maxLength(10), Validators.minLength(10)])),
    // Created a form control instance for Phone Number
    addedElementControl : new FormControl("",Validators.compose([Validators.required, Validators.minLength(1)]))
    // Created a form control instance for Additional data
  });
  
  constructor(private router : Router, private register : UserDataRegisterationService){
  }
  
  ngOnInit(){
    this.createNewAdditionalComponent();
  }

  createNewAdditionalComponent(){
    let additionalComponent={ 
      id : this.count, element : "", elementValue : "" 
    };
    // console.log("person",this.person, additionalComponent)
    if(!Array.isArray(this.person.additionalArray)){
      throw new Error("the object is not an array.")
    }
    this.person.additionalArray.push(additionalComponent)
    console.log("additonalArray",this.person.additionalArray,"count",this.count);
    this.count++;
  }

  addAdditionalElement(itemIndex:number){                                    //Additional input Onkeyup function to store additional element value
    this.additionalItemIndex=itemIndex;
    // console.log(this.person.additionalArray,itemIndex);
    for(let item of this.person.additionalArray){
      if(item.id==itemIndex){
        item.element=this.formData.controls['addedElementControl'].value;     //Reading and storing additional element value
      }
    }
    // this.createNewAdditionalComponent();

  }
  reset(){
    this.count=0;
    this.person.additionalArray=[];
    this.createNewAdditionalComponent();
  }

    // additionalElementStatus = this.formData.controls['addedElementControl']?.invalid && this.formData.controls['addedElementControl']?.touched;
  submitForm(formDetails:any){                                 // Function that invokes on submitting form
    
    this.person.firstName=formDetails.firstNameControl;                                     
    this.person.lastName= formDetails.lastNameControl;
    this.person.userName= formDetails.userNameControl;
    this.person.age= formDetails.ageControl;
    this.person.mailId= this.formData.controls['mailIdControl'].value
    console.log(this.formData.controls['mailIdControl'].value);
    this.person.phoneNumber=formDetails.phoneNumberControl;
    // this.router.navigate(['display'],{state:{savedData : this.person}});
    // this.register.createUser(this.person).subscribe((data)=>console.warn(data))
    console.log(this.person);
    this.register.postDataFromService(this.person).subscribe(res=>{
      console.log(res);
      this.router.navigate(['DisplayComponent'],{
        state:{person:res},
      });
    });
  }
  
  getValue(val:any){                                      //Function to get additional element value from dropdown.component
    for(let item of this.person.additionalArray){
      if(item.id==this.additionalItemIndex){
        console.log("insideif",this.additionalItemIndex,this.person.additionalArray,val)
        item.elementValue=val[this.additionalItemIndex];                                //Storing the additional element value 
      }
  }console.log(this.additionalItemIndex,this.person.additionalArray)
}

  getStatus(val:any){                                          //Function to get dropDownForm status from dropdown.component
    console.log(this.additionalItemIndex,this.person.additionalArray)
    this.submitStatus[this.additionalItemIndex]=val[this.additionalItemIndex];                                      //Storing the dropDownForm status
  }

  get getFirstName(){return this.formData.get('firstNameControl')};   // Function to get the firstNameControl instance of formData formGroup
  get getLastName(){return this.formData.get('lastNameControl')};     // Function to get the lastNameControl instance of formData formGroup
  get getUserName(){return this.formData.get('userNameControl')};     // Function to get the userNameControl instance of formData formGroup
  get getAge(){return this.formData.get('ageControl')};               // Function to get the ageControl instance of formData formGroup
  get getMailId(){return this.formData.get('mailIdControl')};         // Function to get the mailIDControl instance of formData formGroup
  get getPhoneNumber(){return this.formData.get('phoneNumberControl')};   // Function to get the phoneNumberControl instance of formData formGroup
  get getAddedElement(){return this.formData.get('addedElementControl')}; // Function to get the additionalElementControl instance of formData formGroup

}

