import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {StatusPageComponent} from "./pages/status-page/status-page.component";
import {VaccineCardPageComponent} from "./pages/vaccine-card-page/vaccine-card-page.component";
import {CertificateComponent} from "./pages/certificate/certificate.component";
import {VerifyCertificatePageComponent} from "./pages/verify-certificate-page/verify-certificate-page.component";
import {ManualPageComponent} from "./pages/manual-page/manual-page.component";
import {RegistrationPassportPageComponent} from "./pages/registration-passport-page/registration-passport-page.component";

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'', component:HomePageComponent},
      {path:'home', component:HomePageComponent},
      {path:'registration', component:RegistrationPageComponent},
      {path:'faq', component:FaqComponent},
      {path:'status', component:StatusPageComponent},
      {path:'vaccine-card', component:VaccineCardPageComponent},
      {path:'certificate', component:CertificateComponent},
      {path:'verify-certificate', component:VerifyCertificatePageComponent},
      {path:'manual', component:ManualPageComponent},
      {path:'foreigner-enroll', component:RegistrationPassportPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
