import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureContainer } from './feature-container.component';

describe('FeatureComponent', () => {
  let component: FeatureContainer;
  let fixture: ComponentFixture<FeatureContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
