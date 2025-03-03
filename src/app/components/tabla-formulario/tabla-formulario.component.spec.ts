import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFormularioComponent } from './tabla-formulario.component';

describe('TablaFormularioComponent', () => {
  let component: TablaFormularioComponent;
  let fixture: ComponentFixture<TablaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
