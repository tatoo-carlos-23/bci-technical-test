import { TestBed } from '@angular/core/testing';

import { CLocalPaginationService } from './c-local-pagination.service';

describe('CLocalPaginationService', () => {
  let service: CLocalPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CLocalPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
