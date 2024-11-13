import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFilterComponent } from './country-filter.component';

describe('CountryFilterComponent', () => {
  let component: CountryFilterComponent;
  let fixture: ComponentFixture<CountryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
