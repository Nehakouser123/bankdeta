import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  
  
  name = 'myapp';
  BankName="";
  aa:boolean=false;
 
  constructor(public router: Router) { }

  ngOnInit() {
  }
  log(){
    this.router.navigate(['/pune'])
  }
  users=[{
    BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    IFSC:'ABHY0065001',
    BankID:'60',
    Branch:'RTGS-HO'
  },{
    BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    IFSC:'ABHY0065003',
    BankID:'60',
    Branch:'BAIL BAZAR'
  },{
    BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    IFSC:'ABHY0065005',
    BankID:'60',
    Branch:'DARUKHANA'
  },{
    BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    IFSC:'ABHY0065007',
    BankID:'60',
    Branch:'GHATKOPAR'
  },{
      BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
      IFSC:'ABHY0065008',
      BankID:'60',
      Branch:'KANJUR' 
  },
  {
    BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    IFSC:'ABHY0065010',
    BankID:'60',
    Branch:'PAREL' 
},
{
  BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
  IFSC:'ABHY0065012',
  BankID:'60',
  Branch:'WADALA' 
},{
  BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
  IFSC:'ABHY0065014',
  BankID:'60',
  Branch:'MUMBRA' 
},{
  BankName:'ABHYUDAYA COOPERATIVE BANK LIMITED',
  IFSC:'ABHY0065014',
  BankID:'60',
  Branch:'CBD BELAPUR' 
}

]

  setIndex(ii){
    this.aa=ii;
    console.log
  }
}
 

 

