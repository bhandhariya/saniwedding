import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { GalaryComponent } from './galary/galary.component';
import { FamilyPicsComponent } from './family-pics/family-pics.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'',component: EventComponent},
      {path:'event',component: EventComponent},
      {path:'galary',component: GalaryComponent},
      {path:'family',component: FamilyPicsComponent},
      {path:'contact',component: ContactComponent}
    ]
  }
];
@NgModule({
  declarations: [HomeComponent, EventComponent, GalaryComponent, FamilyPicsComponent,ContactComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,HttpClientModule

  ]
})
export class AdminModule { }
