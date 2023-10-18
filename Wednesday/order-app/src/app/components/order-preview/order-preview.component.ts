import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceLocalService } from 'src/app/services/order-service-local.service';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit{

  constructor(private route:ActivatedRoute, @Inject('OrderServiceService') private service: OrderServiceService){}

  order?:Order;

  ngOnInit(): void {
    this.route.params.subscribe( params => this.getOrder(params));
  }

  getOrder(params:any){
    this.service.getOrderByTicker(params.ticker).subscribe(data => this.order = data);
  }

}
