import { TestBed } from '@angular/core/testing';

import { Carrera } from './carrera';

describe('Registro', () => {
  let service: Carrera;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carrera);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
