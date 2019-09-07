import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { PuneComponent } from './pune/pune.component';


const routes: Routes = [
  {path:'',component:BankdetailsComponent},
  {path:'pune',component:PuneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
