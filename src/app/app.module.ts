import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { CommonService } from './service/common.service';
import { ParagraphComponent } from './component/paragraph/paragraph.component';
import { ButtonComponent } from './component/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './component/banner/banner.component';
import { ModalComponent } from './component/modal/modal.component';
import { ComponentAComponent } from './component/component-a/component-a.component';
import { ComponentBComponent } from './component/component-b/component-b.component';
import { ComponentCComponent } from './component/component-c/component-c.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ParagraphComponent,
    ButtonComponent,
    BannerComponent,
    ModalComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent
  ],
  entryComponents: [
    ParagraphComponent,
    ButtonComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
