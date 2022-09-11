import { FormGroup } from "@angular/forms";

 export interface Deck {
    Title:string,
    Question:[string],
    Answers:[string],
    ThumbnailUrl:string,
    UserResult:[number],
    Genre:[string],
    Description:string,
}

 export interface Deck extends FormGroup {
  value: Deck;
  Title: string;
  Question: [string];
  Answers: [string];
  ThumbnailUrl: string;
  UserResult: [number];
  Genre: [string];
  Description: string;
}


