import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public testCount: number[] = [1, 2, 3]

  constructor() {
  }

  ngOnInit(): void {
  }

}
