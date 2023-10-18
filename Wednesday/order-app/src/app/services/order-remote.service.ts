import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from '../model/order';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderRemoteService implements OrderService {

  constructor(private http: HttpClient) { }

  portfolio: Order[] = [new Order("MSFT", 100, 100.4, "BUY"), 
  new Order("GOOGL", 40, 30.2, "SELL"), new Order("NFLX", 10, 30.4, "SELL")];

  private static readonly ORDERS_PATH = "http://localhost:8080/orders"

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(OrderRemoteService.ORDERS_PATH);
  }

  saveOrder(order:Order):Observable<any>{
    return this.http.post<any>(OrderRemoteService.ORDERS_PATH, order).pipe(
      catchError(this.handleError)
    )

  }

  getOrderByTicker(ticker:string):Observable<Order>{
    return this.http.get<Order>(OrderRemoteService.ORDERS_PATH+"/"+ticker)
  }

  handleError(error:any):Observable<never>{
    throw new Error('Whoopsie!')
  }

}
