import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { NoFoundComponent } from './no-found/no-found.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    SharedComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
