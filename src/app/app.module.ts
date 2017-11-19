import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { InterestComponent } from './interest/interest.component';
import { FamilyComponent } from './family/family.component';
import { PhotosComponent } from './photos/photos.component';
import { WorksComponent } from './works/works.component'
const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'resume',component:ResumeComponent},
  {path:'interest',component:InterestComponent},
  {path:'family',component:FamilyComponent},
  {path:'study',component:StudyComponent},
  {path:'photos',component:PhotosComponent},
  {path:'works',component:WorksComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ResumeComponent,
    HomeComponent,
    StudyComponent,
    InterestComponent,
    FamilyComponent,
    PhotosComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
