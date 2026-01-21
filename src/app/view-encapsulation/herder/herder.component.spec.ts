import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerderComponent } from './herder.component';

describe('HerderComponent', () => {
  let component: HerderComponent;
  let fixture: ComponentFixture<HerderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
