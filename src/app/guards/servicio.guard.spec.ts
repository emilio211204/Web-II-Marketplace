import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { servicioGuard } from './servicio.guard';

describe('servicioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => servicioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
