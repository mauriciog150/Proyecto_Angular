import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CategoryComponent
  ]
})
export class PagesModule { }
