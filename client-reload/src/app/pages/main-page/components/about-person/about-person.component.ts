import {Component, OnInit} from '@angular/core';
import {getAge} from "../../../../shared/utils/getAge";

@Component({
  selector: 'app-about-person',
  templateUrl: './about-person.component.html',
  styleUrls: ['./about-person.component.scss']
})
export class AboutPersonComponent implements OnInit {

  public personAge!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.personAge = getAge();
  }

}
