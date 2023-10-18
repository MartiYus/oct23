import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { OrderPreviewComponent } from '../order-preview/order-preview.component';

const routes: Routes = [
  {path: '', redirectTo:'orders', pathMatch: 'full'},
  {path: 'orders', component: OrdersComponent},
  {path: 'new-order', component: OrderFormComponent},
  {path: 'orders/:ticker', component: OrderPreviewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
