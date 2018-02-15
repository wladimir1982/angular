import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContentComponent} from "./content/content.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SetupPageComponent} from './setup-page/setup-page.component';
import {InfoComponent} from "./info/info.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContentService} from "./content/content.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {SetupPageService} from "./setup-page/setup-page.service";
import {NewsComponent} from "./news/news.component";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    SetupPageComponent,
    InfoComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContentService, SetupPageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
