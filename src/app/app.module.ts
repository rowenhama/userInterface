import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirtimeReversalComponent } from './airtime-reversal/airtime-reversal.component';
import { AirtimeTransferComponent } from './airtime-transfer/airtime-transfer.component';
import { RetrievePukComponent } from './retrieve-puk/retrieve-puk.component';

@NgModule({
  declarations: [
    AppComponent,
    AirtimeReversalComponent,
    AirtimeTransferComponent,
    RetrievePukComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
