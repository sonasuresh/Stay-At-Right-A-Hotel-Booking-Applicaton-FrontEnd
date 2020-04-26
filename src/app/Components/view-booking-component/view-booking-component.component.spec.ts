import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingComponentComponent } from './view-booking-component.component';

describe('ViewBookingComponentComponent', () => {
  let component: ViewBookingComponentComponent;
  let fixture: ComponentFixture<ViewBookingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBookingComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
