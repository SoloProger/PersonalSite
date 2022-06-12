import {Component, OnInit} from '@angular/core';
import {navbarRouterLinks} from "./utils/navbar-router-links";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public links = navbarRouterLinks;

  constructor() {
  }

  ngOnInit(): void {
  }

}
