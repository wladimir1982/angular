import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsRoutingModule} from "./forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {RegistrationFormComponent} from "./registration-form.component";
import {RegistrationFormOneComponent} from "./registration-form-one/registration-form-one.component";
import {RegistrationFormTwoComponent} from "./registration-form-two/registration-form-two.component";
import {RegistrationFormService} from "./registration-form.service";



@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationFormOneComponent,
    RegistrationFormTwoComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RegistrationFormService
  ]
})
export class RegistrationFormModule {
}
