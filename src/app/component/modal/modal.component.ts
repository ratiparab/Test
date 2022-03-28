import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ComponentCComponent } from '../component-c/component-c.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalcontainer', { read: ViewContainerRef, static: true }) 
  public modalViewContainer: ViewContainerRef;

  @Input() data: string; 

  private componentsMapping = {
    btn1 : ComponentCComponent,
    btn2 : ComponentAComponent,
    btn3 : ComponentBComponent
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.loadComponent();
  }

  private loadComponent(){
    const component = this.componentsMapping[this.data];
    const componentRef = this.modalViewContainer.createComponent(component);
    return componentRef;
  }
  
  close() {
    this.modalService.hide();
  }

}
