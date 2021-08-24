import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCertificatePageComponent } from './verify-certificate-page.component';

describe('VerifyCertificatePageComponent', () => {
  let component: VerifyCertificatePageComponent;
  let fixture: ComponentFixture<VerifyCertificatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCertificatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCertificatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
