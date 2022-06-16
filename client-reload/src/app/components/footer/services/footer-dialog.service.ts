import {Injectable} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {AboutSiteComponent} from "../components/about-site/about-site.component";

@Injectable({
  providedIn: 'root'
})
export class FooterDialogService {

  constructor(private readonly dialogService: DialogService) {
  }

  public openDialog(): void {
    this.dialogService.open(AboutSiteComponent, {})
  }
}
