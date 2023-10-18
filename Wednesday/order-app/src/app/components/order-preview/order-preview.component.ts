import { getNsPrefix } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderLocalService } from 'src/app/services/order-local.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit{

  constructor(private route: ActivatedRoute, @Inject('OrderService')  private service:OrderService){  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.getOrder(params))
  }

  getOrder(params:any){
    this.service.getOrderByTicker(params['ticker']).subscribe(data => this.order = data);
  }

  order?:Order;



}
