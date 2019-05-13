import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './map/map.component';
import {HttpService} from './services/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClickComponent} from './click/click.component';
import {DataService} from './services/data.service';
import {AddNewEventComponent} from './click/add_new_event/add_new_event/add-new-event.component';
import {NavigationComponent} from './click/add_new_event/navigation/navigation.component';
import {TrueFalseService} from './services/true-false.service';
import {EditComponent} from './click/add_new_event/edit/edit.component';
import {PointsComponent} from './points/points.component';
import {EditEventComponent} from './click/add_new_event/edit/edit-event/edit-event.component';
import {EditNavComponent} from './click/add_new_event/edit/edit-nav/edit-nav.component';
import {LoginComponent} from './click/login/login.component';
import {RegisterComponent} from './click/register/register.component';
import {LogoutComponent} from './click/logout/logout.component';
import {ImageAddComponent} from './click/add_new_event/image-add/image-add.component';
import {MainComponent} from './main/main.component';
import {ProductComponent} from './product/product.component';
import {EventsComponent} from './events/events.component';
import {EventComponent} from './event/event.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './safe.pipe';
import {IsActiveInterceptor} from './is-active-interceptor';
import { TwoDigitsPipe } from './two-digits.pipe';
import { PointComponent } from './point/point.component';
import { RegisterSuccessComponent } from './landing-pages/register-success/register-success.component';
import { RegisterFailureComponent } from './landing-pages/register-failure/register-failure.component';
import { ConfirmRegistrationComponent } from './landing-pages/confirm-registration/confirm-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ClickComponent,
    AddNewEventComponent,
    NavigationComponent,
    EditComponent,
    PointsComponent,
    EditEventComponent,
    EditNavComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ImageAddComponent,
    MainComponent,
    ProductComponent,
    EventsComponent,
    EventComponent,
    SafePipe,
    TwoDigitsPipe,
    PointComponent,
    RegisterSuccessComponent,
    RegisterFailureComponent,
    ConfirmRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTJaL1N7hFGC2MrUwhHbp_Mx29ecmT3nk' // Klucz do google maps
    }),
    NgbModule
  ],
  providers: [HttpService, DataService, TrueFalseService,
    { provide: HTTP_INTERCEPTORS, useClass: IsActiveInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
