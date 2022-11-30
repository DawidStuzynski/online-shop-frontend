import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminConfirmDialogComponent} from "./admin-confirm-dialog/admin-confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AdminConfirmDialogService {

  constructor(private dialog: MatDialog) {
  }

  openConfirmDialog() {
    this.dialog.open(AdminConfirmDialogComponent, {
      width: '400px'
    });
  }
}
