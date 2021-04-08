import { ReposComponent } from './../repos/repos.component';
import { ProfileComponent } from './../profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  {path: 'repositories', component: ReposComponent},
  { path: '', redirectTo: "/profile", pathMatch: "full" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
