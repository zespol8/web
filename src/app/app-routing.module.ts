import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './click/login/login.component';
import {MainComponent} from './main/main.component';
import {RegisterComponent} from './click/register/register.component';
import {EventComponent} from './event/event.component';
import {PointsComponent} from './points/points.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product', component: ProductComponent},
  {path: 'main', component: MainComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'points/:id', component: PointsComponent},
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: '**', redirectTo: '/product', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
