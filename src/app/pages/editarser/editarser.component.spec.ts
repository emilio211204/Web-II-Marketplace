import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarserComponent } from './editarser.component';

describe('EditarserComponent', () => {
  let component: EditarserComponent;
  let fixture: ComponentFixture<EditarserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
