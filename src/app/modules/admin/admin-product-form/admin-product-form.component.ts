import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";


@Component({
  selector: 'app-admin-product-form',
  template: `
      <div [formGroup]="parentForm" fxLayout="column">
          <mat-form-field appearance="fill">
              <mat-label>Name</mat-label>
              <input matInput placeholder="Enter product name" formControlName="name">
              <div *ngIf="name?.invalid &&(name?.dirty||name?.touched)" class="errorMessages">
                  <div *ngIf="name?.errors?.['required']">
                      <p> Name is mandatory</p>
                  </div>
                  <div *ngIf="name?.errors?.['minlength']">
                      <p>Name must have min 4 letters</p>
                  </div>
              </div>
          </mat-form-field>

          <div [formGroup]="parentForm" fxLayout="column">
              <mat-form-field appearance="fill">
                  <mat-label>Friendly url</mat-label>
                  <input matInput placeholder="Enter product url" formControlName="slug">
                  <div *ngIf="slug?.invalid &&(slug?.dirty||slug?.touched)" class="errorMessages">
                      <div *ngIf="slug?.errors?.['required']">
                          <p> Name is mandatory</p>
                      </div>
                      <div *ngIf="slug?.errors?.['minlength']">
                          <p>Name must have min 4 letters</p>
                      </div>
                  </div>
              </mat-form-field>

              <mat-form-field appearance="fill">
                  <mat-label>Description</mat-label>
                  <textarea matInput rows="20" placeholder="Enter product description"
                            formControlName="description"></textarea>
                  <div *ngIf="description?.invalid &&(description?.dirty||description?.touched)" class="errorMessages">
                      <div *ngIf="description?.errors?.['required']">
                          <p> Description is mandatory</p>
                      </div>
                      <div *ngIf="description?.errors?.['minlength']">
                          <p>Description must have min 4 letters</p>
                      </div>
                  </div>
              </mat-form-field>

              <mat-form-field appearance="fill">
                  <mat-label>Category</mat-label>
                  <textarea matInput rows="20" placeholder="Enter product category"
                            formControlName="category"></textarea>
                  <div *ngIf="category?.invalid &&(category?.dirty||category?.touched)" class="errorMessages">
                      <div *ngIf="category?.errors?.['required']">
                          <p> Category is mandatory</p>
                      </div>
                      <div *ngIf="category?.errors?.['minlength']">
                          <p>Category must have min 4 letters</p>
                      </div>
                  </div>
              </mat-form-field>

              <mat-form-field appearance="fill">
                  <mat-label>Price</mat-label>
                  <input matInput placeholder="Enter product price" formControlName="price">
                  <div *ngIf="price?.invalid &&(price?.dirty||price?.touched)" class="errorMessages">
                      <div *ngIf="price?.errors?.['required']">
                          <p> Price is mandatory</p>
                      </div>
                      <div *ngIf="price?.errors?.['min']">
                          <p>Price must be over 0</p>
                      </div>
                  </div>
              </mat-form-field>

              <mat-form-field appearance="fill">
                  <mat-label>Currency</mat-label>
                  <input matInput placeholder="Enter product currency" formControlName="currency">
                  <div *ngIf="currency?.invalid &&(currency?.dirty||currency?.touched) " class="errorMessages">
                      <div *ngIf="currency?.errors?.['required']">
                          <p> Currency is mandatory</p>
                      </div>
                  </div>
              </mat-form-field>

              <div fxFlexAlign="end">
                  <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Save</button>
              </div>
          </div>
      </div>`,
  styles: [`
    .errorMessages {
      color: red;
    }
  `]

})
export class AdminProductFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  ngOnInit(): void {

  }

  get name() {
    return this.parentForm.get("name")
  }

  get description() {
    return this.parentForm.get("description")
  }

  get category() {
    return this.parentForm.get("category")
  }

  get price() {
    return this.parentForm.get("price")
  }

  get currency() {
    return this.parentForm.get("currency")
  }

  get slug() {
    return this.parentForm.get("slug")
  }
}
