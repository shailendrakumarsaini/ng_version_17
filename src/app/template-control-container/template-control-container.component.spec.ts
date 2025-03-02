import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControlContainerComponent } from './template-control-container.component';

describe('TemplateControlContainerComponent', () => {
  let component: TemplateControlContainerComponent;
  let fixture: ComponentFixture<TemplateControlContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateControlContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
