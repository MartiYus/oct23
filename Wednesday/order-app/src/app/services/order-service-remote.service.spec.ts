import { TestBed } from '@angular/core/testing';

import { OrderServiceRemoteService } from './order-service-remote.service';

describe('OrderServiceRemoteService', () => {
  let service: OrderServiceRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderServiceRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
