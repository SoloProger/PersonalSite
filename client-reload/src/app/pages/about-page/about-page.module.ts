import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutPageComponent} from './about-page.component';
import {CARD_CONFIG_TOKEN} from "../../shared/tokens/card-config-token";
import {AboutCardConfig} from "./config/AboutCardConfig";
import {CardModule} from "../../shared/card/card.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    RouterModule.forChild(
      [
        {
          path: "",
          component: AboutPageComponent
        }
      ]
    ),
    CommonModule,
    CardModule
  ],
  providers: [
    {provide: CARD_CONFIG_TOKEN, useValue: AboutCardConfig}
  ]

})
export class AboutPageModule {
}
