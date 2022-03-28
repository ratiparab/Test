import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: ['']
})
export class Page1Component implements OnInit {
  @ViewChild('content', { read: ViewContainerRef, static: true })
  public contentViewContainer: ViewContainerRef;

  data: any;
  pageForm: any;
  constructor(private commonService:CommonService) {} 

  ngOnInit() {
    this.pageForm = new FormGroup({
      'gender': new FormControl(null),
      'genderInputs': new FormArray([]),
    });
    
    this.commonService.getComponent().page1.components.forEach((value) => this.loadComponent(value.component_name, value.data)); 
  }

  onSubmit() {
    console.log(this.pageForm.value);
  }

  onAddMaleInput() {
    this.pageForm = new FormGroup({
      'gender': new FormControl('male'),
      'genderInputs': new FormArray([]),
    })
    this.pageForm.get('genderInputs').push(new FormControl());    
    this.pageForm.get('genderInputs').push(new FormControl());
    this.pageForm.get('genderInputs').push(new FormControl());  
  }

  onAddFemaleInput() {
    this.pageForm = new FormGroup({
      'gender': new FormControl('female'),
      'genderInputs': new FormArray([]),
    })
    this.pageForm.get('genderInputs').push(new FormControl());
    this.pageForm.get('genderInputs').push(new FormControl());
  }

  private loadComponent(component, data) {
    const componentRef = this.contentViewContainer.createComponent(component);
    ( componentRef.instance as any ).data = data;
    return componentRef;
  }

}
