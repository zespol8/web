import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './click/login/login.component';
import {MainComponent} from './main/main.component';
import {RegisterComponent} from './click/register/register.component';
import {EventComponent} from './event/event.component';
import {PointsComponent} from './points/points.component';
import {PointComponent} from './point/point.component';
import {RegisterSuccessComponent} from './landing-pages/register-success/register-success.component';
import {RegisterFailureComponent} from './landing-pages/register-failure/register-failure.component';
import {ConfirmRegistrationComponent} from './landing-pages/confirm-registration/confirm-registration.component';
import {ResetPasswordStartComponent} from './landing-pages/reset-password-start/reset-password-start.component';
import {ResetPasswordChangeComponent} from './landing-pages/reset-password-change/reset-password-change.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product', component: ProductComponent},
  {path: 'main', component: MainComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'points/:id', component: PointsComponent},
  {path: 'point/:eventId/:pointId', component: PointComponent},
  {path: 'register/success', component: RegisterSuccessComponent},
  {path: 'register/failure', component: RegisterFailureComponent},
  {path: 'register/confirm', component: ConfirmRegistrationComponent},
  {path: 'resetPassword/start', component: ResetPasswordStartComponent},
  {path: 'resetPassword/change/:hash', component: ResetPasswordChangeComponent},
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: '**', redirectTo: '/product', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
