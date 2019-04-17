import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ClickComponent } from './click/click.component';
import { DataService } from './services/data.service';
import { AddNewEventComponent } from './click/add_new_event/add_new_event/add-new-event.component';
import { NavigationComponent } from './click/add_new_event/navigation/navigation.component';
import { TrueFalseService } from './services/true-false.service';
import { EditComponent } from './click/add_new_event/edit/edit.component';
import { PointsComponent } from './click/add_new_event/add_new_event/points/points.component';
import { EditEventComponent } from './click/add_new_event/edit/edit-event/edit-event.component';
import { EditNavComponent } from './click/add_new_event/edit/edit-nav/edit-nav.component';
import { LoginComponent } from './click/login/login.component';
import { RegisterComponent } from './click/register/register.component';
import { LogoutComponent } from './click/logout/logout.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTJaL1N7hFGC2MrUwhHbp_Mx29ecmT3nk' // Klucz do google maps
    })
  ],
  providers: [HttpService, DataService, TrueFalseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
