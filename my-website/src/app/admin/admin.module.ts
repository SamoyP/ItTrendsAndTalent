import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CmsComponent } from './cms/cms.component';
import {UpdateContentComponent} from "./update-content/update-content.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [LoginComponent, CmsComponent, UpdateContentComponent]
})
export class AdminModule { }
