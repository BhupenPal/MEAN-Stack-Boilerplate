import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MinionComponent } from './components/minion/minion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'minions', component: MinionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
