import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureContainer } from './containers/feature/feature-container.component';


@NgModule({
  declarations: [
    FeatureContainer,
  ],
  imports: [
    CommonModule,

    FeatureRoutingModule,
  ]
})
export class FeatureModule {}
