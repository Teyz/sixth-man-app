import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualitesComponent } from './actualites.component';
import { ActualitesRoutingModule } from './actualites-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActualitesRoutingModule
  ],
  exports: [
    ActualitesComponent
  ],
  declarations: [
    ActualitesComponent
  ],
  providers: [
  ],
})
export class ActualitesModule { }