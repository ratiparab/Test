import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/service/common.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  @ViewChild('content', { read: ViewContainerRef, static: true })
  public contentViewContainer: ViewContainerRef
  data: any;
  bsModalRef: BsModalRef;
  
  constructor(private commonService: CommonService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.commonService.getComponent().page2.components.forEach((value) => this.loadComponent(value.component_name, value.data)); 
  }

  private loadComponent(component, data) {
    const componentRef = this.contentViewContainer.createComponent(component);
    ( componentRef.instance as any ).data = data;
    return componentRef;
  }

  openModalWithComponent(data){
    ModalComponent.prototype.data = data;
    this.bsModalRef = this.modalService.show(ModalComponent);
  }

}
