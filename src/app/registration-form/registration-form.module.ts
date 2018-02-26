import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsRoutingModule} from "./forms-routing.module";

import {RegistrationFormComponent} from "./registration-form.component";
import {RegistrationFormOneComponent} from "./registration-form-one/registration-form-one.component";
import {RegistrationFormTwoComponent} from "./registration-form-two/registration-form-two.component";


@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationFormOneComponent,
    RegistrationFormTwoComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  providers: []
})
export class RegistrationFormModule {
}
