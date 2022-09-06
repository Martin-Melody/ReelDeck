import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertComponent } from 'src/app/Dialog/alert/alert.component';
import { ConfirmComponent } from 'src/app/Dialog/confirm/confirm.component';
import { AlertDialogData } from 'src/app/Models/Alert-Dialog-data';
import { ConfirmDialogData } from 'src/app/Models/Confirm-Dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog:MatDialog) { }

  confirmDialog(data: ConfirmDialogData): Observable<boolean>{
    return this._dialog.open(ConfirmComponent,{
      data,
      width: '400px',
      disableClose:true
    }).afterClosed();
  }

  alertDialog(data: AlertDialogData):Observable<boolean>{
    return this._dialog.open(AlertComponent,{
      data,
      width: '400px',
    }).afterClosed();
  }
}
