import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from "src/app/Models/Confirm-Dialog-data";
import { Inject } from "@angular/core";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : ConfirmDialogData) { }

  ngOnInit(): void {
  }

}
