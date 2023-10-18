import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {

  isArchived: boolean = false;

  @Input()
  order: Order = new Order("DEFAULT", 100, 100, "DEFAULT");

  clickHandler(){
    this.isArchived = true;
  }

  constructor(private router:Router){}

  trader:string = "";

  divClickHandler(){
    this.router.navigate(['orders', this.order.ticker])
  }
}
