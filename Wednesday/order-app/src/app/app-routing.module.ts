import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderPreviewComponent } from './components/order-preview/order-preview.component';

const routes: Routes = [
  {path:'', redirectTo:'orders', pathMatch:'full'},
  {path:'orders', component: OrdersComponent},
  {path:'order-form', component: OrderFormComponent},
  {path:'orders/:ticker', component:OrderPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
