import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CoupleComponent } from './component/couple/couple.component';
import { EventComponent } from './component/event/event.component';
import { SaniPeopleComponent } from './component/sani-people/sani-people.component';
import { RadhaPeopleComponent } from './component/radha-people/radha-people.component';
import { GalaryComponent } from './component/galary/galary.component';
import { RsvpComponent } from './component/rsvp/rsvp.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CoupleComponent,
    EventComponent,
    SaniPeopleComponent,
    RadhaPeopleComponent,
    GalaryComponent,
    RsvpComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,AngularFireStorageModule,BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
