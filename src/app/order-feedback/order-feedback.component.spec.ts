import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFeedbackComponent } from './order-feedback.component';

describe('OrderFeedbackComponent', () => {
  let component: OrderFeedbackComponent;
  let fixture: ComponentFixture<OrderFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
