import {  NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIComponentComponent } from './component/ui-component/ui-component.component';
import { CommonModule } from '@angular/common';
import { ProductState } from '../store/states/product.state';
import { CartState } from '../store/states/cart.state';
import {  HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UIComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxsModule.forRoot([ProductState,CartState]), 
    NgxsReduxDevtoolsPluginModule.forRoot()
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
