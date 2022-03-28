import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() data: any;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.route.navigate( [this.data.link] );
  }

}
