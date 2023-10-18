import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable, of } from 'rxjs';
import { OrderService } from './order.service';

@Injectable()
export class OrderLocalService implements OrderService{
  
  portfolio: Order[] = [new Order("MSFT", 100, 100.4, "BUY"), 
  new Order("GOOGL", 40, 30.2, "SELL"), new Order("NFLX", 10, 30.4, "SELL")];

  constructor() { }

  getAllOrders():Observable<Order[]>{
    return of(this.portfolio);
  }

  saveOrder(order:Order):Observable<any>{
    this.portfolio.push(order);
    return of('OK');

  }

  getOrderByTicker(ticker:string):Observable<Order>{
    return of(this.portfolio.filter(order => order.ticker == ticker)[0])
  }
}
