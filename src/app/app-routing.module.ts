import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./content/content.component";
import {SetupPageComponent} from "./setup-page/setup-page.component";
import {InfoComponent} from "./info/info.component";


const routes = [
  {path: '', component: ContentComponent},
  {path: 'setup', component: SetupPageComponent},
  {path: 'setup/:id', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
