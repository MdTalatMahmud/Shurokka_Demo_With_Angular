import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {StatusPageComponent} from "./pages/status-page/status-page.component";
import {VaccineCardPageComponent} from "./pages/vaccine-card-page/vaccine-card-page.component";

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
