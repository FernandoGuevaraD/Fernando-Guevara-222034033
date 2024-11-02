import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLicenseComponent } from './form-license.component';

describe('FormLicenseComponent', () => {
  let component: FormLicenseComponent;
  let fixture: ComponentFixture<FormLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLicenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
