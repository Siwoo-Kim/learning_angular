import { TestBed, inject } from '@angular/core/testing';

import { Chapter3Service } from './chapter3.service';

describe('Chapter3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chapter3Service]
    });
  });

  it('should be created', inject([Chapter3Service], (service: Chapter3Service) => {
    expect(service).toBeTruthy();
  }));
});
