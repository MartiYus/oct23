import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
    @Input()
    order!:Order;

    constructor(private router: Router){}

    isArchived : boolean = false;

    trader:string = "";

    clickHandler(){
      this.isArchived = true;
    }

    panelClicked(){
      this.router.navigate(['orders', this.order.ticker])
    }
}
