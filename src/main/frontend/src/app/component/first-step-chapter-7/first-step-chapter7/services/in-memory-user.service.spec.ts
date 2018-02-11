import { TestBed, inject } from '@angular/core/testing';

import { InMemoryUserService } from './in-memory-user.service';

describe('InMemoryUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryUserService]
    });
  });

  it('should be created', inject([InMemoryUserService], (service: InMemoryUserService) => {
    expect(service).toBeTruthy();
  }));
});
