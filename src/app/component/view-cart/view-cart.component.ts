import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CartState } from '../../../store/states/cart.state';
import { cartproduct } from '../../../Models/cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css',
})
export class ViewCartComponent {
  cartProductData$: Observable<cartproduct[]>;
  totalpriceempty: boolean = false;
  totalPrice: any;
  constructor(private store: Store) {
    this.cartProductData$ = this.store.select(CartState.getProductCart);

    this.getPrice();
  }

  getPrice() {
    this.cartProductData$.subscribe((data) => {
      if (!data || data.length === 0) {
        this.totalPrice = null;
        this.totalpriceempty = false;
        return;
      }

      this.totalPrice = data.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      this.totalpriceempty = true;
    });
  }
}
