import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


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
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ModeAchatComponent } from './components/mode-achat/mode-achat.component';
import { FormPayementNoCompteComponent } from './components/form-payement-no-compte/form-payement-no-compte.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

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
    CommandeComponent,
    ConnexionComponent,
    InscriptionComponent,
    ModeAchatComponent,
    FormPayementNoCompteComponent,
    ProductOrderComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
