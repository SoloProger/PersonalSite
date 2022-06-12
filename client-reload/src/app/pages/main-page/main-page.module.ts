import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {AboutPersonComponent} from './components/about-person/about-person.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    MainPageComponent,
    AboutPersonComponent,
    LatestPostComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MainPageComponent
    }]),
    ButtonModule
  ]
})
export class MainPageModule {
}
