import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCardPageComponent } from './vaccine-card-page.component';

describe('VaccineCardPageComponent', () => {
  let component: VaccineCardPageComponent;
  let fixture: ComponentFixture<VaccineCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
