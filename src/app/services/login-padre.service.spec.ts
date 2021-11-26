import { TestBed } from '@angular/core/testing';

import { LoginPadreService } from './login-padre.service';

describe('LoginPadreService', () => {
  let service: LoginPadreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPadreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
