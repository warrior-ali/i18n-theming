import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/mat.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { OverlayModule } from '@angular/cdk/overlay';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  FlexLayoutModule,
  OverlayModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
