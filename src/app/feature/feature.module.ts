import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureContainerComponent } from './containers/feature/feature-container.component';


@NgModule({
    declarations: [
        FeatureContainerComponent,
    ],
    imports: [
        CommonModule,

        FeatureRoutingModule,
    ],
})
export class FeatureModule {}
