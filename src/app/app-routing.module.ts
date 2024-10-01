import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCartComponent } from './component/view-cart/view-cart.component';
import { UIComponentComponent } from './component/ui-component/ui-component.component';

const routes: Routes = [
  {
    path:"View-Cart",
    component:ViewCartComponent
  },
  {
    path:"",
    component:UIComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
