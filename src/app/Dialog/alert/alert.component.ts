import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AlertDialogData } from 'src/app/Models/Alert-Dialog-data';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertDialogData) {}

  ngOnInit(): void {}
}
