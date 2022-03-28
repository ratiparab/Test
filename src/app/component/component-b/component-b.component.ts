import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  template: `<p>Component B works!</p>`,
  styles: ['']
})
export class ComponentBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
