import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LocationComponent } from './location/location.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 {
   path:'',
   children:[

    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'createUser',
      component: CreateUserComponent
    },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
   
  
   ]
 

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
