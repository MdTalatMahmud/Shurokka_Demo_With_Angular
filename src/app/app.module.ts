import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import {PagesModule} from "./pages/pages.module";

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClientModule, HttpClient} from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        PagesModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader:{
            provide:TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps:[HttpClient]
          }
        })

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
