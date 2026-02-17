import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildrenComponent } from './content-children.component';

describe('ContentChildrenComponent', () => {
  let component: ContentChildrenComponent;
  let fixture: ComponentFixture<ContentChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
