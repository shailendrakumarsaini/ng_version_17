import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCompleteComponent } from './not-complete.component';

describe('NotCompleteComponent', () => {
  let component: NotCompleteComponent;
  let fixture: ComponentFixture<NotCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
