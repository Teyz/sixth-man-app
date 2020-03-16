import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats.component';
import { StatsRoutingModule } from './stats-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule
  ],
  exports: [
    StatsComponent
  ],
  declarations: [
    StatsComponent
  ],
  providers: [
  ],
})
export class StatsModule { }