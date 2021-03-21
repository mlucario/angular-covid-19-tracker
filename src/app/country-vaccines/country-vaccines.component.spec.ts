import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryVaccinesComponent } from './country-vaccines.component';

describe('CountryVaccinesComponent', () => {
  let component: CountryVaccinesComponent;
  let fixture: ComponentFixture<CountryVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryVaccinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
