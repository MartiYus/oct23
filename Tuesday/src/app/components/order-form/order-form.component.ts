import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  onSubmit(){
    console.log(this.orderForm.value)
  }

}
