import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityComponentComponent } from './availability-component.component';

describe('AvailabilityComponentComponent', () => {
  let component: AvailabilityComponentComponent;
  let fixture: ComponentFixture<AvailabilityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
