import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationComponent } from './view-encapsulation.component';

describe('ViewEncapsulationComponent', () => {
  let component: ViewEncapsulationComponent;
  let fixture: ComponentFixture<ViewEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
