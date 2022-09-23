import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { AsideLeftNavComponent } from './components/aside-left-nav/aside-left-nav.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { PanierComponent } from './components/panier/panier.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ButtonComponent } from './components/button/button.component';
import { CommandeComponent } from './components/commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterComponent,
    LandingComponent,
    WakandaComponent,
    EnigmeComponent,
    AsideLeftNavComponent,
    EshopComponent,
    PanierComponent,
    MonCompteComponent,
    ProductsComponent,
    CartComponent,
    SingleProductComponent,
    ButtonComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
