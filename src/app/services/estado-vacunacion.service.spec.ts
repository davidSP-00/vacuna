import { TestBed } from '@angular/core/testing';

import { EstadoVacunacionService } from './estado-vacunacion.service';

describe('EstadoVacunacionService', () => {
  let service: EstadoVacunacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoVacunacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
