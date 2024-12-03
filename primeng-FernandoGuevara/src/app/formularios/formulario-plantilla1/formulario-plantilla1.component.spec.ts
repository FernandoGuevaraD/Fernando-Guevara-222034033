import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioPlantilla1Component } from './formulario-plantilla1.component';

describe('FormularioPlantilla1Component', () => {
  let component: FormularioPlantilla1Component;
  let fixture: ComponentFixture<FormularioPlantilla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPlantilla1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPlantilla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
