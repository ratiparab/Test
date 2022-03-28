import { Component, Input, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  template: `<p>{{data.text}}</p>`,
  styles: []
})
export class ParagraphComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
