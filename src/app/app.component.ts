import { Component } from '@angular/core';
import { ProductService } from './Services/product.service';
import { Store } from '@ngxs/store';
import { GetProduct } from '../store/actions/product.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StateManageMentUsing_NGXS';
  constructor(private store:Store){
this.store.dispatch(new GetProduct())
  }
}
