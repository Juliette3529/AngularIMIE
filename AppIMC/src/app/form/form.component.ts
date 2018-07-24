import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  weight: number;
  size: number;
  result: number;

  calculate(weight, size) {
    this.result = this.weight / (this.size * this.size);
  }

  constructor() { }

  ngOnInit() {
  }

}