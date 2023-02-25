import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: 'home' }
];

//charmonman bold
//47C4F5
//7FDBFF - cicon
// const routes: Routes = [
//   //{ path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
//   { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
//   { path: '', component: NoLayoutComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: NOLAYOUT_ROUTES },
//   { path: '**', redirectTo: 'login' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
