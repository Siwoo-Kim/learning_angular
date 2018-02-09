import { TestBed, inject } from '@angular/core/testing';

import { LoggerSecondService } from './logger-second.service';

describe('LoggerSecondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerSecondService]
    });
  });

  it('should be created', inject([LoggerSecondService], (service: LoggerSecondService) => {
    expect(service).toBeTruthy();
  }));
});
