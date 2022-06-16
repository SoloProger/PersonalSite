import {Component, Inject, OnInit, Optional} from '@angular/core';
import {CardConfig} from "./types/CardConfig";
import {CARD_CONFIG_TOKEN} from "../tokens/card-config-token";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    @Inject(CARD_CONFIG_TOKEN)
    public config: CardConfig[]
  ) {
  }

  ngOnInit(): void {
  }

}
