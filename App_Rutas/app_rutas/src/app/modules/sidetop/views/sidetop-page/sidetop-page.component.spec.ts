import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetopPageComponent } from './sidetop-page.component';

describe('SidetopPageComponent', () => {
  let component: SidetopPageComponent;
  let fixture: ComponentFixture<SidetopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidetopPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidetopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
