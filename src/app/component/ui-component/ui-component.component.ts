import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductState } from '../../../store/states/product.state';
import { Observable } from 'rxjs';
import { product } from '../../../Models/product.model';
import { subscribe } from 'diagnostics_channel';
import { AddToCart, RemoveFromCart } from '../../../store/actions/cart.action';


@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.component.html',
  styleUrl: './ui-component.component.css'
})
export class UIComponentComponent {
 productData$:Observable<product[]>
 filterProductData$?:Observable<product[]>
constructor(private store:Store){
 this.productData$=this.store.select(ProductState.getallproduct);
 

}
productSelect(e:Event){
  const selectboxValue=(e.target as HTMLSelectElement) .value
  if(selectboxValue) this.filterProductData$=this.store.select(ProductState.geyProductByName(selectboxValue))
  else this.filterProductData$=undefined
}
AddProduct(product:product){
const payload={
  id:product.id,
  productName:product.productName,
  
  quantity:1,
  price:product.Price,
}
this.store.dispatch(new AddToCart(payload))
}

removeProduct(product:product){
  const payload={
    id:product.id,
   
  }
this.store.dispatch(new RemoveFromCart(payload))
}

}
