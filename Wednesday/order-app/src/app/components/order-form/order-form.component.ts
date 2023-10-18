import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderLocalService } from 'src/app/services/order-local.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  orderForm = new FormGroup({
    ticker: new FormControl('', Validators.required),
    qty: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
    price: new FormControl(0),
    side: new FormControl('')
  })

  get ticker(){
    return this.orderForm.get("ticker");
  }

  constructor(@Inject('OrderService') private service: OrderService, private router:Router){}

  order: Order = new Order('', 0 ,0 , '');

  onSubmit(){
    console.log(this.orderForm.value)
    this.order= Object.assign(this.order, this.orderForm.value);
    this.service.saveOrder(this.order).subscribe(data=> console.log(data));
    this.orderForm.reset();
    this.router.navigate(['orders']);

  }

}
