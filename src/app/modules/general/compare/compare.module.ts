import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareComponent } from './compare.component';
import { CompareRoutingModule } from './compare-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CompareRoutingModule
  ],
  exports: [
    CompareComponent
  ],
  declarations: [
    CompareComponent
  ],
  providers: [
  ],
})
export class CompareModule { }