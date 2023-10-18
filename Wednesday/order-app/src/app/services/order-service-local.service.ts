import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import {  Observable, of } from 'rxjs';
import { OrderServiceService } from './order-service.service';

@Injectable()
export class OrderServiceLocalService implements OrderServiceService {

  portfolio : Order[] = [new Order("NFLX", 10, 100.1, "BUY"), new Order("GOOGL", 1, 150.3, "SELL"), new Order("MSFT", 40, 300.5, "BUY")]

  constructor() { }

  saveOrder(newOrder: Order):Observable<any>{
    this.portfolio.push(newOrder);
    console.log(this.portfolio);
    return of ('OK');
  }

  getOrders():Observable<Order[]>{
    return of(this.portfolio);
  }

  getOrderByTicker(ticker:string): Observable<Order>{
    return of (this.portfolio.filter(el=> el.ticker == ticker)[0])
  }
}
