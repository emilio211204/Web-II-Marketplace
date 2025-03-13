import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPrestaComponent } from './formulario-presta.component';

describe('FormularioPrestaComponent', () => {
  let component: FormularioPrestaComponent;
  let fixture: ComponentFixture<FormularioPrestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPrestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioPrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
