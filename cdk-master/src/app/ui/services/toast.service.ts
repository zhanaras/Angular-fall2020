import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../components/toast/toast.component';


@Injectable({
  providedIn: 'root'
})
export class ToastService{

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar_tt(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean) {
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
      verticalPosition: 'top',
      horizontalPosition: 'start',
      panelClass: messageType
    });
  }

  openSnackBar_tc(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean) {
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
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: messageType
    });
  }

  openSnackBar_tb(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean) {
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
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: messageType
    });
  }

  openSnackBar_bt(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean) {
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
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
      panelClass: messageType
    });
  }

  openSnackBar_bc(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean) {
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
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: messageType
    });
  }

  openSnackBar_bb(title: string, displayMessage: string, messageType: 'fail' | 'success', duration: number, hasDuration: boolean, hasButton: boolean, hasTitle: boolean) {
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
      verticalPosition: 'bottom',
      horizontalPosition: 'end',
      panelClass: messageType
    });
  }

  openSnackBar(title: string, displayMessage: string, hasButton: boolean, hasTitle: boolean, hasDuration: boolean) {
    this._snackBar.openFromComponent(ToastComponent, {
      data: {
        title: title,
        message: displayMessage,
        hasDuration: hasDuration,
        hasButton: hasButton,
        hasTitle: hasTitle
      },
      duration: 5000
    });
  }
}