import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchedulerComponent implements OnInit {

  moment = Date.now;

  constructor() { }
   ngOnInit() {
  }

  onSubmit(f: any) {}
}
