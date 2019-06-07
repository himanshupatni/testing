import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit , AfterViewInit {
message:FormGroup;
submitted=false;
success= false;
@ViewChild ('nameRef',{static: false} ) nameElementRef: ElementRef;
  constructor(private formBuilder: FormBuilder) {
    this.message=this.formBuilder.group({
      name:['', Validators.required],
      message:['', Validators.required]
    })
   }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
    // console.log(this.nameElementRef.nativeElement.baseURI);

    
  }
onSubmitted(){
  this.submitted=true;
console.log(this.message);

  if(this.message.invalid)
  return;

  this.success=true;


}
}
