import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler/scheduler/scheduler.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DateTimePickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
