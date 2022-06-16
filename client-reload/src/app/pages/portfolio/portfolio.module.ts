import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {RouterModule} from "@angular/router";
import {CardModule} from "../../shared/card/card.module";
import {CARD_CONFIG_TOKEN} from "../../shared/tokens/card-config-token";
import {PortfolioCardConfig} from "./config/PortfolioCardConfig";


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PortfolioComponent
      }
    ]),
    CommonModule,
    CardModule
  ],
  providers: [
    {provide: CARD_CONFIG_TOKEN, useValue: PortfolioCardConfig}
  ]
})
export class PortfolioModule {
}
