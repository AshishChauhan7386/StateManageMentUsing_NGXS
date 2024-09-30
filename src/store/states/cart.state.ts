import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { cartproduct } from '../../Models/cart.model';
import { AddToCart, RemoveFromCart } from '../actions/cart.action';
interface CartStateModel {
  cartproducts: cartproduct[];
}
@State<CartStateModel>({
  name: 'cartproduct',
  defaults: {
    cartproducts: [],
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getProductCart(state: CartStateModel) {
    return state.cartproducts;
  }

  @Action(AddToCart)
  addtocart(ctx: StateContext<CartStateModel>, action: AddToCart) {
    const state = ctx.getState();
    const cartitem = state.cartproducts.find(
      (item) => item.id == action.payload.id
    );
    if (cartitem) {
      ctx.patchState({
        cartproducts: state.cartproducts.map((item) => {
          return item.id == action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item;
        }),
      });
    } else {
      ctx.patchState({
        ...state,
        cartproducts: [...state.cartproducts, action.payload],
      });
    }
  }

  @Action(RemoveFromCart)
  removetocart(ctx: StateContext<CartStateModel>, action: RemoveFromCart) {
    const state = ctx.getState();
    const cartitemexsisting = state.cartproducts.find(
      (item) => item.id == action.payload.id
    );
    if (cartitemexsisting && cartitemexsisting.quantity > 1) {
      ctx.patchState({
        cartproducts: state.cartproducts.map((item) => {
          return item.id == action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
      });
    } else {
      ctx.patchState({
        cartproducts: state.cartproducts.filter(
          (item) => item.id !== action.payload.id
        ),
      });
    }
  }
}
