import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredLoadingComponent } from './deferred-loading.component';

describe('DeferredLoadingComponent', () => {
  let component: DeferredLoadingComponent;
  let fixture: ComponentFixture<DeferredLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferredLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
