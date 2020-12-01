import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ToastComponent } from '../components/toast/toast.component';


@Injectable({
  providedIn: 'root'
})
export class ToastService{

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean, vPos: MatSnackBarVerticalPosition, hPos: MatSnackBarHorizontalPosition) {
    this._snackBar.openFromComponent(ToastComponent, {
      data: {
        title: title,
        message: displayMessage,
        type: messageType,
        hasDuration: hasDuration,
        hasButton: hasButton,
        hasTitle: hasTitle
      },
      duration: duration,
      verticalPosition: vPos,
      horizontalPosition: hPos,
      panelClass: [messageType, vPos, hPos]
    });
  }

  openSnackBarError(title: string, displayMessage: string, messageType: 'fail' | 'success', hasButton: boolean, hasTitle: boolean) {
    this._snackBar.openFromComponent(ToastComponent, {
      data: {
        title: title,
        message: displayMessage,
        type: messageType,
        hasButton: hasButton,
        hasTitle: hasTitle
      }, 
      duration: 5000,
      panelClass: messageType
    });
  }
}