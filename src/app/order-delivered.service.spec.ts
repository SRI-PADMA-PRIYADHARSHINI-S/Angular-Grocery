import { TestBed } from '@angular/core/testing';

import { OrderDeliveredService } from './order-delivered.service';

describe('OrderDeliveredService', () => {
  let service: OrderDeliveredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDeliveredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
