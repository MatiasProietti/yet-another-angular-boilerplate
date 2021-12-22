import { TestBed } from '@angular/core/testing';

import { AuthRepositoryService } from './auth-repository.service';

describe('AuthRepositoryService', () => {
  let service: AuthRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
