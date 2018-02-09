import { TestBed, inject } from '@angular/core/testing';

import { AbstractLoggerService } from './logger.service';

describe('AbstractLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractLoggerService]
    });
  });

  it('should be created', inject([AbstractLoggerService], (service: AbstractLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
