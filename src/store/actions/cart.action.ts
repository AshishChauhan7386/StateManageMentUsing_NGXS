import { cartproduct } from '../../Models/cart.model';





export class AddToCart {
  static readonly type = '[cartProduct] Add';

  constructor(public payload: cartproduct) {}
}


export class RemoveFromCart {
  static readonly type = '[cartProduct] remove';

  constructor(public payload:Partial<cartproduct>) {}
}