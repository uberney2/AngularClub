import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LocationComponent } from './location/location.component';
import { InformationComponent } from './information/information.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,

    UsersComponent,
     CreateUserComponent,
     AboutUsComponent,
     GalleryComponent,
     InvoiceComponent,
     LocationComponent,
     InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
