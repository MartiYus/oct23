import { TestBed } from '@angular/core/testing';

import { OrderRemoteService } from './order-remote.service';

describe('OrderRemoteService', () => {
  let service: OrderRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
