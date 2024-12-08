import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhProductsComponent } from './seacrh-products.component';

describe('SeacrhProductsComponent', () => {
  let component: SeacrhProductsComponent;
  let fixture: ComponentFixture<SeacrhProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeacrhProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeacrhProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
