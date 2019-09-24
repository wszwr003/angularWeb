import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DevicesOnlineComponent } from './devices-online/devices-online.component';

const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/add',
    component: ProductAddComponent
  },
  {
    path: 'product/online',
    component: DevicesOnlineComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
