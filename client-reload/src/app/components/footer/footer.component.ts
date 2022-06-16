import {Component, OnInit} from '@angular/core';
import {FooterDialogService} from "./services/footer-dialog.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private readonly footerDialog: FooterDialogService) {
  }

  ngOnInit(): void {
  }

  public show(): void {
    this.footerDialog.openDialog();
  }

}
