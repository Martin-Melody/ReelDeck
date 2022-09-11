import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Deck } from "../../shared/interfaces/deck";

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css'],
})
export class CreateDeckComponent implements OnInit {
  pseudoDeck!: Deck;

  constructor(private _formBuilder: FormBuilder, private _dialogService:DialogService) {}

  ngOnInit(): void {
    this.pseudoDeck = this._formBuilder.group({
      Title: ['', [Validators.required]],
      Questions: this._formBuilder.array(['']),
      Answers: this._formBuilder.array(['']),
      ThumbnailUrl: ['', [Validators.required]],
      UserResult: [0],
      Genre: this._formBuilder.array([]),
      Description: ['', [Validators.required]],
    }) as Deck;
  }

  get Title() {
    return this.pseudoDeck.get('Title');
  }

  get Questions() {
    return this.pseudoDeck.get('Questions') as FormArray;
  }

  get Answers() {
    return this.pseudoDeck.get('Answers') as FormArray;
  }

  get ThumbnailUrl() {
    return this.pseudoDeck.get('ThumbnailUrl');
  }

  get Genre() {
    return this.pseudoDeck.get('Genre');
  }

  get Description() {
    return this.pseudoDeck.get('Description');
  }

 

  CreateDeck(){
    console.log(this.pseudoDeck.value);
  }

  addQnAs(){
    this.Questions.push(this._formBuilder.control(''))
    this.Answers.push(this._formBuilder.control(''))
  }
}
