import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildComponent } from './content-child.component';

describe('ContentChildComponent', () => {
  let component: ContentChildComponent;
  let fixture: ComponentFixture<ContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
