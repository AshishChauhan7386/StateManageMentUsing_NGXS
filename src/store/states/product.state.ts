import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { product } from '../../Models/product.model';
import { GetProduct } from '../actions/product.action';
import { ProductService } from '../../app/Services/product.service';
import { tap } from 'rxjs';
interface ProductStateModel {
  products: product[];
}
@State<ProductStateModel>({
  name: 'product',
  defaults: {
    products:[]
  },
})
@Injectable()

export class ProductState {
  constructor(private productdata:ProductService){}
  @Selector()
  static getallproduct(state: ProductStateModel) {
    return state.products;
  }
  static geyProductByName(type: string) {
    return createSelector([ProductState], (state: ProductStateModel) => {
      return state.products.filter((item) => item.productName == type);
    });
  }

  @Action(GetProduct)
  getData(ctx:StateContext<ProductStateModel>){
return this.productdata.getProductData().pipe(
  tap((data)=>{
    ctx.patchState({ products: data });

  })
)
  }
}
