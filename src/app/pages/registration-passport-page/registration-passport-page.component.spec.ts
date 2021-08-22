import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPassportPageComponent } from './registration-passport-page.component';

describe('RegistrationPassportPageComponent', () => {
  let component: RegistrationPassportPageComponent;
  let fixture: ComponentFixture<RegistrationPassportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPassportPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPassportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
