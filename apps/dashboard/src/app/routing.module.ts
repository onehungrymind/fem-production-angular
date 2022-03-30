import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Route = [
  { path: '', component: HomeComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
