import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css'],
})
export class ButtonCounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}
