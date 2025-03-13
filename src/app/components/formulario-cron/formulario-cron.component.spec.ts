import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCronComponent } from './formulario-cron.component';

describe('FormularioCronComponent', () => {
  let component: FormularioCronComponent;
  let fixture: ComponentFixture<FormularioCronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCronComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
