import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Deck } from "../../shared/interfaces/deck";
import { Genre } from "../../shared/interfaces/genre";
import { ENTER, COMMA } from "@ANGULAR/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css'],
})
export class CreateDeckComponent implements OnInit {
  pseudoDeck!: Deck;

  encapsulation!:ViewEncapsulation.None;

  // Genres:Genre[] =[
  //   {value:'generalKnowledge-0', viewValue:'General Knowledge'},
  //   {value:'science-1', viewValue:'Science'},
  //   {value:'maths-2', viewValue:'Maths'}
  // ]

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Genres: Genre[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.Genres.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(_Genres: Genre): void {
    const index = this.Genres.indexOf(_Genres);

    if (index >= 0) {
      this.Genres.splice(index, 1);
    }
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogService: DialogService
  ) {}




  ngOnInit(): void {
    this.pseudoDeck = this._formBuilder.group({
      Title: ['', [Validators.required]],
      Questions: this._formBuilder.array(['']),
      Answers: this._formBuilder.array(['']),
      ThumbnailUrl: ['', [Validators.required]],
      UserResult: [0],
      Genre:this._formBuilder.array([''], Validators.required),
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

  get Genre(): FormArray {
    return this.pseudoDeck.get('Genre') as FormArray;
  }

  get Description() {
    return this.pseudoDeck.get('Description');
  }

  CreateDeck() {
    console.log(this.pseudoDeck.value);
  }

  addQnAs() {
    this.Questions.push(this._formBuilder.control(''));
    this.Answers.push(this._formBuilder.control(''));
  }
}
