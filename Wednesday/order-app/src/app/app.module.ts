import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { AppRoutingModuleModule } from './components/app-routing-module/app-routing-module.module';
import { OrderPreviewComponent } from './components/order-preview/order-preview.component';
import { OrderServiceLocalService } from './services/order-service-local.service';
import { OrderServiceService } from './services/order-service.service';
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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModuleModule,
    HttpClientModule
  ],
  providers: [{provide: 'OrderServiceService', useClass: environment.remoteService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
