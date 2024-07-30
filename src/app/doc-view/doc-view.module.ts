import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocViewPageRoutingModule } from './doc-view-routing.module';

import { DocViewPage } from './doc-view.page';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocViewPageRoutingModule,
    NgxDocViewerModule
  ],
  declarations: [DocViewPage]
})
export class DocViewPageModule {}
