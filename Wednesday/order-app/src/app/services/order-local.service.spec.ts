import { TestBed } from '@angular/core/testing';

import { OrderLocalService } from './order-local.service';

describe('OrderLocalService', () => {
  let service: OrderLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
