import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductState } from '../../../store/states/product.state';
import { Observable } from 'rxjs';
import { product } from '../../../Models/product.model';


@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.component.html',
  styleUrl: './ui-component.component.css'
})
export class UIComponentComponent {
 productData$:Observable<product[]>
constructor(private store:Store){
 this.productData$=this.store.select(ProductState.getallproduct);
 console.log(this.productData$)

}


}
