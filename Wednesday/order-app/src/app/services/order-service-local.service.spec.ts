import { TestBed } from '@angular/core/testing';

import { OrderServiceLocalService } from './order-service-local.service';

describe('OrderServiceLocalService', () => {
  let service: OrderServiceLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderServiceLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
