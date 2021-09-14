import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreDataModule } from '@fem/core-data';
import { CoreStateModule } from '@fem/core-state';
import { MaterialModule } from '@fem/material';
import { UiToolbarModule } from '@fem/ui-toolbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    MaterialModule,
    UiToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
