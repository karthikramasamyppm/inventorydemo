import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { StockproductComponent } from './stockproduct/stockproduct.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';

const routes: Routes = [

  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'updateproduct',
    component: UpdateproductComponent
  },
  {
    path: 'viewcustomerorder',
    component: ViewcusOrderComponent
  },
  {
    path: 'stockproduct',
    component: StockproductComponent
  },
  {
    path: 'transferowner',
    component:TransferownershipComponent

  },
  {
    path:'withdraw',
    component:WithdrawComponent
  },
  {
    path:'customerpurchase',
    component:CustomerpurchaseComponent
  },
  {
    path:'cancelorder',
    component:CancelorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
