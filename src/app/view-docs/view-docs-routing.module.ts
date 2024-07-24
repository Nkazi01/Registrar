import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDocsPage } from './view-docs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDocsPageRoutingModule {}
