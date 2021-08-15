import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { StatusPageComponent } from './status-page/status-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    HomePageComponent,
    RegistrationPageComponent,
    StatusPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  exports: [
    MatCardModule,
  ]
})
export class PagesModule { }
