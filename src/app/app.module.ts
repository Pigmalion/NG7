import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NodesbackgroundComponent } from './login/nodesbackground/nodesbackground.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path: 'welcome', component:  WelcomePageComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NodesbackgroundComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
