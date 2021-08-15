import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { GalaryComponent } from './galary/galary.component';
import { FamilyPicsComponent } from './family-pics/family-pics.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'',component: EventComponent},
      {path:'event',component: EventComponent},
      {path:'galary',component: GalaryComponent},
      {path:'family',component: FamilyPicsComponent},
    ]
  }
];
@NgModule({
  declarations: [HomeComponent, EventComponent, GalaryComponent, FamilyPicsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)

  ]
})
export class AdminModule { }
