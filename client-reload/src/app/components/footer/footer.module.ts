import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {AboutSiteComponent} from './components/about-site/about-site.component';
import {DialogService} from "primeng/dynamicdialog";
import {FooterDialogService} from "./services/footer-dialog.service";


@NgModule({
  declarations: [
    FooterComponent,
    AboutSiteComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DialogService,
    FooterDialogService
  ]
})
export class FooterModule {
}
