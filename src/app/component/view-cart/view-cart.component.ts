import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CartState } from '../../../store/states/cart.state';
import { cartproduct } from '../../../Models/cart.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
  cartProductData$:Observable<cartproduct[]>;
constructor(private store:Store){
  this.cartProductData$=this.store.select(CartState.getProductCart)
 

}
}
