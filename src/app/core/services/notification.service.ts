import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly _baseCloseLabel: string = 'Fechar';

  private readonly _baseConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 1500,
  };

  constructor(private _snackbar: MatSnackBar) {}

  message(text: string, close?: string, config?: MatSnackBarConfig): void {
    this._snackbar.open(
      text,
      close ?? this._baseCloseLabel,
      config ?? this._baseConfig
    );
  }

  error(text: string): void {
    this._snackbar.open(text, this._baseCloseLabel, {
      ...this._baseConfig,
      duration: 2000,
      panelClass: ['warn-notification'],
    });
  }

  success(text: string): void {
    this._snackbar.open(text, this._baseCloseLabel, {
      ...this._baseConfig,
      duration: 2000,
      panelClass: ['success-notification'],
    });
  }
}
