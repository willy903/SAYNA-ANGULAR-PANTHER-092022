import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './components/landing/landing.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { PanierComponent } from './components/panier/panier.component';
import { CommandeComponent } from './components/commande/commande.component';
import { FormPayementNoCompteComponent } from './components/form-payement-no-compte/form-payement-no-compte.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '',redirectTo:"home",pathMatch:"full"},
  { path: 'home', component: LandingComponent},
  { path: '', component: LandingComponent},
  { path: 'wakanda', component: WakandaComponent},
  { path: 'enigme', component: EnigmeComponent},
  { path: 'eshop', component: EshopComponent},
  { path: 'moncompte', component: MonCompteComponent},
  { path: 'product', component: ProductsComponent},
  { path: 'singleproduct/:productId', component: SingleProductComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'commande', component: CommandeComponent},
  { path: 'pagePayement', component: FormPayementNoCompteComponent},
  { path: 'authentification', component: ConnexionComponent},
  { path: 'register', component: InscriptionComponent},
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
