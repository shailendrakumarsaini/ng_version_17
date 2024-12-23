import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewComponent } from './user-list.component';

describe('DeferredViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
