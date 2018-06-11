import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { StockproductComponent } from './stockproduct/stockproduct.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UpdateproductComponent,
    ViewcusOrderComponent,
    StockproductComponent,
    TransferownershipComponent,
    WithdrawComponent,
    CustomerpurchaseComponent,
    CancelorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
