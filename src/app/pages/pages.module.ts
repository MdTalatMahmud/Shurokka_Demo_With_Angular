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
import { FaqComponent } from './faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { VaccineCardPageComponent } from './vaccine-card-page/vaccine-card-page.component';
import { CertificateComponent } from './certificate/certificate.component';
import { VerifyCertificatePageComponent } from './verify-certificate-page/verify-certificate-page.component';
import { ManualPageComponent } from './manual-page/manual-page.component';
import { RegistrationPassportPageComponent } from './registration-passport-page/registration-passport-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    RegistrationPageComponent,
    StatusPageComponent,
    FaqComponent,
    VaccineCardPageComponent,
    CertificateComponent,
    VerifyCertificatePageComponent,
    ManualPageComponent,
    RegistrationPassportPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
  ]
})
export class PagesModule { }
