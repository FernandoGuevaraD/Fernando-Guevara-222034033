import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateProductsComponent } from './validate-products.component';

describe('ValidateProductsComponent', () => {
  let component: ValidateProductsComponent;
  let fixture: ComponentFixture<ValidateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
