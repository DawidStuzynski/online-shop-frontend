import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AdminProduct} from "./adminProduct";
import {AdminProductService} from "./admin-product.service";
import {MatPaginator} from "@angular/material/paginator";
import {map, startWith, switchMap} from "rxjs";
import {AdminConfirmDialogService} from "../admin-confirm-dialog.service";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ["id", "name", "price", "actions"];
  totalElements: number = 0;
  data: AdminProduct[] = [];

  constructor(
    private adminProductService: AdminProductService,
    private dialogService: AdminConfirmDialogService
  ) {
  }


  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      }),
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content
    })
  }

  confirmDelete(id: number) {
    this.dialogService.openConfirmDialog();

  }
}
