import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReseComponent } from './formulario-rese.component';

describe('FormularioReseComponent', () => {
  let component: FormularioReseComponent;
  let fixture: ComponentFixture<FormularioReseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioReseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
