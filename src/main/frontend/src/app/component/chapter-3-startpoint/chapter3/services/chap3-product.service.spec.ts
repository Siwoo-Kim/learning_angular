import { TestBed, inject } from '@angular/core/testing';

import { Chap3ProductService } from './chap3-product.service';

describe('Chap3ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chap3ProductService]
    });
  });

  it('should be created', inject([Chap3ProductService], (service: Chap3ProductService) => {
    expect(service).toBeTruthy();
  }));
});
