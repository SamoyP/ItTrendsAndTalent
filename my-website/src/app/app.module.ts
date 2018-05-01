import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './services/auth-guard.service';
import {WebPageComponent} from "./web-page/web-page.component";
import {CmsComponent} from "./admin/cms/cms.component";


@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [ApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
