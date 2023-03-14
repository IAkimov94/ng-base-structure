import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureContainer } from './containers/feature/feature-container.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
