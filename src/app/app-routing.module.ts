import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaveModelComponent } from './components/leave-model/leave-model.component';
import { NavsideComponent } from './admin/navside/navside.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { MangerViewComponent } from './manager/manager-view/manager-view.component';

import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './components/auth/auth.component';
import { ManagerGuard } from './guards/manager.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // 🔁 Default to login
   { path: 'home', component: HomeComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'manager','user'] } },
  { path: 'model', component: LeaveModelComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'manager'] } },
  { path: 'admin', component: NavsideComponent, canActivate: [AdminGuard] },
  { path: 'leaves', component: LeavesComponent, canActivate: [AuthGuard] },
  { path: 'manager', component: MangerViewComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'manager'] } },
  { path: 'auth/:mode', component: AuthComponent }, // ✅ one component for both
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


