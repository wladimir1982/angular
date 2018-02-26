import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public value: number = 10

  constructor() {
  }

  ngOnInit() {
  }

  addIncr() {
    this.value++
  }

  test(e) {
    this.value = e;
  }
}
