import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPromiseDifferenceComponent } from './observables-promise-difference.component';

describe('ObservablesPromiseDifferenceComponent', () => {
  let component: ObservablesPromiseDifferenceComponent;
  let fixture: ComponentFixture<ObservablesPromiseDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesPromiseDifferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservablesPromiseDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
