import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullpageadminComponent} from "./fullpageadmin.component";
import {AdminComponent} from "../../modules/admin/admin.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminProductComponent} from "../../modules/admin/admin-product/admin-product.component";



@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FullpageadminModule { }
