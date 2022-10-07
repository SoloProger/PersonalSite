export interface Contact {
  key: string;
  icon: string;
  title: string;
  body: string;
  link: string;
  buttonName: string;
}

export interface Contacts {
  contacts: Contact[]
}
