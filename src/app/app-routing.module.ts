import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirtimeReversalComponent } from './airtime-reversal/airtime-reversal.component';
import { AirtimeTransferComponent } from './airtime-transfer/airtime-transfer.component';
import { RetrievePukComponent } from './retrieve-puk/retrieve-puk.component';

const routes: Routes = [
  {path: "",pathMatch:"full",redirectTo:"/airtime-transfer"},
  {path: "airtime-reversal",component:AirtimeReversalComponent},
  {path: "retrieve-puk",component:RetrievePukComponent},
  {path: "airtime-transfer",component:AirtimeTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
