import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'view-docs',
    loadChildren: () => import('./view-docs/view-docs.module').then( m => m.ViewDocsPageModule)
  },
  {
    path: 'approval',
    loadChildren: () => import('./approval/approval.module').then( m => m.ApprovalPageModule)
  },
  {
    path: 'all-users',
    loadChildren: () => import('./all-users/all-users.module').then( m => m.AllUsersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
