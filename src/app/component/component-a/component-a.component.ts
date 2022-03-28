import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  template: `<p>Component A works!</p>`,
  styles: ['']
})
export class ComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
