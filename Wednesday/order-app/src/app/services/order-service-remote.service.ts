import { Injectable } from '@angular/core';
import { OrderServiceService } from './order-service.service';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class OrderServiceRemoteService implements OrderServiceService{
  portfolio : Order[] = [new Order("NFLX", 10, 100.1, "BUY"), new Order("GOOGL", 1, 150.3, "SELL"), new Order("MSFT", 40, 300.5, "BUY")]

  constructor(private http: HttpClient) { }

  private static readonly ORDERS_PATH = 'http://localhost:8080/orders';

  saveOrder(newOrder: Order):Observable<any>{
    console.log(newOrder);
    return this.http.post<any>(OrderServiceRemoteService.ORDERS_PATH, newOrder).pipe(
      catchError(this.handleError)
    );
  }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(OrderServiceRemoteService.ORDERS_PATH)
  }

  getOrderByTicker(ticker:string): Observable<Order>{
    return this.http.get<Order>(OrderServiceRemoteService.ORDERS_PATH+"/"+ticker)
  }

  private handleError(error: any): Observable<never> {
    throw new Error('Oops something went wrong! Please try again later.');
  }
 
}
