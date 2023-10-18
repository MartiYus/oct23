import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderLocalService } from './services/order-local.service';
import { OrderPreviewComponent } from './components/order-preview/order-preview.component';
import { environment } from './environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrdersComponent,
    OrderFormComponent,
    OrderPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: 'OrderService', useClass: environment.remoteService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
