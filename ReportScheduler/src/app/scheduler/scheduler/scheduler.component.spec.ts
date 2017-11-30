import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchedulerComponent } from './scheduler.component';
import { MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from 'ng-pick-datetime';

describe('SchedulerComponent', () => {
  let component: SchedulerComponent;
  let fixture: ComponentFixture<SchedulerComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        SchedulerComponent
      ],
      imports: [
        FormsModule,
        DateTimePickerModule
      ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have date time picker', () => {
    const element = fixture.nativeElement.querySelector('#date-time-picker');
    expect(element).toBeTruthy();
  });
});
