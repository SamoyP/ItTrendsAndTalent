import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {CmsComponent} from './admin/cms/cms.component';
import {AuthGuard} from './services/auth-guard.service';
import {WebPageComponent} from './web-page/web-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cms', component: CmsComponent, canActivate: [AuthGuard]},
  {path: '', component: WebPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule {
}
