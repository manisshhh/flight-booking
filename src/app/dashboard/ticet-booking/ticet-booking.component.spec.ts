import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicetBookingComponent } from './ticet-booking.component';

describe('TicetBookingComponent', () => {
  let component: TicetBookingComponent;
  let fixture: ComponentFixture<TicetBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicetBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicetBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
