import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  portfolio: Order[] = [new Order("MSFT", 100, 100.4, "BUY"), 
  new Order("GOOGL", 40, 30.2, "SELL"), new Order("NFLX", 10, 30.4, "SELL")];

  ngOnInit(): void {
    
  }

}
