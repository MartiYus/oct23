import { Component, Inject, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderLocalService } from 'src/app/services/order-local.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  portfolio?: Order[];

  constructor(@Inject('OrderService') private service: OrderService){}

  ngOnInit(): void {
     this.service.getAllOrders().subscribe(data=> this.portfolio = data);
  }

}
