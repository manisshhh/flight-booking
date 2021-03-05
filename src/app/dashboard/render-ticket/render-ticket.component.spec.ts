import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTicketComponent } from './render-ticket.component';

describe('RenderTicketComponent', () => {
  let component: RenderTicketComponent;
  let fixture: ComponentFixture<RenderTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
