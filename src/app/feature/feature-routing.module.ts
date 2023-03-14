import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureContainerComponent } from './containers/feature/feature-container.component';

const routes: Routes = [
    {
        path: '',
        component: FeatureContainerComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeatureRoutingModule {}
