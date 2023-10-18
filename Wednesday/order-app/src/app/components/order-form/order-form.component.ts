import { Component, Inject } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceLocalService } from 'src/app/services/order-service-local.service';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {

  constructor(@Inject('OrderServiceService')private service: OrderServiceService, private router:Router){}

  orderForm = new FormGroup({
    ticker: new FormControl('', Validators.required),
    qty: new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
    price: new FormControl(0),
    side: new FormControl('')
  });

  get ticker(){
    return this.orderForm.get('ticker'); 
  }

  order:Order=new Order('',0,0,'');


  onSubmit(){
    this.order = Object.assign(this.order, this.orderForm.value)
    this.service.saveOrder(this.order).subscribe({
      next: value => {
        this.orderForm.reset();
        this.router.navigate(['orders']);
      },
      //error: error => this.error = error
    });
    
  }
}
