import { HostListener, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{GitCommandPageComponent} from './git-command-page/git-command-page.component';
import{AngularCommandPageComponent} from './angular-command-page/angular-command-page.component';
import{BootstrapCommandPageComponent} from './bootstrap-command-page/bootstrap-command-page.component';
import{DockerCommandPageComponent} from './docker-command-page/docker-command-page.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'git-command-page', component:GitCommandPageComponent},
  {path: 'angular-command-page', component:AngularCommandPageComponent},
  {path: 'bootstrap-command-page', component:BootstrapCommandPageComponent},
  {path: 'docker-command-page', component:DockerCommandPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,GitCommandPageComponent,AngularCommandPageComponent,
  BootstrapCommandPageComponent,DockerCommandPageComponent]