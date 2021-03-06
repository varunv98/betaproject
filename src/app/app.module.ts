import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTotopComponent } from './scroll-totop/scroll-totop.component';
import { HomeComponent } from './home/home.component';
import { GitCommandPageComponent } from './git-command-page/git-command-page.component';
import { BootstrapCommandPageComponent } from './bootstrap-command-page/bootstrap-command-page.component';
import { AngularCommandPageComponent } from './angular-command-page/angular-command-page.component';
import { DockerCommandPageComponent } from './docker-command-page/docker-command-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScrollTotopComponent,
    HomeComponent,
    GitCommandPageComponent,
    BootstrapCommandPageComponent,
    AngularCommandPageComponent,
    DockerCommandPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
