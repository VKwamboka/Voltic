import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./landingpage/landingpage.component').then(l=>l.LandingpageComponent)},
  {path:'about', loadComponent:()=>import('./about/about.component').then(a=>a.AboutComponent)},
  {path:'about/awesome-team',loadComponent:()=>import('./awesome-team/awesome-team.component').then(a=>a.AwesomeTeamComponent)},
  {path:'contact-us',loadComponent:()=>import('./contact/contact.component').then(c=>c.ContactComponent)},
  {path:'products',loadComponent:()=>import('./products/products.component').then(p =>p.ProductsComponent)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
