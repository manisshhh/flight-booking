import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/authGuards/auth.guard';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [

  {
    path:"login",
    component:CommonLayoutComponent,
    pathMatch:"full"
  },
  {
    path:"dashboard",
    canActivate: [AuthGuard],
    loadChildren: () => import("./dashboard/dashboard.module").then(dash => dash.DashboardModule)
  },
  {
    path:"**",
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
