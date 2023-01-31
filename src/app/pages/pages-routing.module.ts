import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  //Rutas protegidas
  {path:'dashboard', component:PagesComponent, children:[
    {path:'', component:DashboardComponent},
    {path:'category', component:CategoryComponent},
    {path:'products', component:ProductComponent},
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
