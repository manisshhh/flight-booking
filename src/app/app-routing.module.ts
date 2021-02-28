import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
  {
    path:"**",
    redirectTo:"login"

  },
  {
    path:"login",
    component:CommonLayoutComponent,
    pathMatch:"full"
  },
  {
    path:"dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(dash => dash.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
