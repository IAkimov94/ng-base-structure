import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    selector: 'app-feature',
    templateUrl: './feature-container.component.html',
    styleUrls: ['./feature-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureContainerComponent {}
