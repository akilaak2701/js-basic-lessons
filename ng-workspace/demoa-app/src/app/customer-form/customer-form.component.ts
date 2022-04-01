import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  //data-model
  customerModel: any;
  constructor() {console.log("customer  form Loaded") }

  ngOnInit(): void {
    this.customerModel = {
      firstName: 'steve',
      lastName: 'Jobs',
      email: 'steve.jobs@goodplace.com'
    }
  }
saveCustomer(customerFormGroup: any){
  if(customerFormGroup.valid){
    console.log(customerFormGroup.value);
  }
}
}
