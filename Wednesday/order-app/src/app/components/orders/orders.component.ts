import { Component, Inject, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderServiceLocalService } from 'src/app/services/order-service-local.service';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  constructor(@Inject('OrderServiceService')private service: OrderServiceService){}

  ordersList?: Order[];

  ngOnInit(): void {
    this.service.getOrders().subscribe(data=> this.ordersList = data);
  }

}
