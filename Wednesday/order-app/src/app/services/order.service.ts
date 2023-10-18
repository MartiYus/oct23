import { Observable } from "rxjs";
import { Order } from "../model/order";

export interface OrderService{

    getAllOrders():Observable<Order[]>;

    saveOrder(newOrder: Order): Observable<any>;

    getOrderByTicker(ticker: string) : Observable<Order>;

}