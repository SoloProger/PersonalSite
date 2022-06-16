import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/Contact";
import {contactList} from "../../utils/contact-list";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts: Contact[] = contactList;

  constructor() {
  }

  ngOnInit(): void {
  }

}
