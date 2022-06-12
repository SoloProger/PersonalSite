import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {AboutPersonComponent} from './components/about-person/about-person.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    MainPageComponent,
    AboutPersonComponent
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
