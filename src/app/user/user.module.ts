import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent as UserListComponent } from './user-view/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RoleResolveGuard } from '../guards/role.resolve.guard';
import { RoleResolveGuardFn } from '../guards/role.resolve.guard';

const routes :Routes = [
  { path : '', component : UserListComponent },
  { path : ':id', component : UserDetailsComponent,
    // resolve : { data : RoleResolveGuard }, // interface based implementation
    resolve : { data : RoleResolveGuardFn }, // function based implementation
  },
]
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
