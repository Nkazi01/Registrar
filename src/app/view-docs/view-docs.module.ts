import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDocsPageRoutingModule } from './view-docs-routing.module';

import { ViewDocsPage } from './view-docs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDocsPageRoutingModule
  ],
  declarations: [ViewDocsPage]
})
export class ViewDocsPageModule {}
