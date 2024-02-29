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

  it('should paginate data correctly', () => {
    const testData = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      value: `Item ${i + 1}`,
    }));
    const pageSize = 5;
    const result = service.pagination(testData, 2, pageSize);
    expect(result.page).toBe(2);
    expect(result.size).toBe(pageSize);
    expect(result.totalElements).toBe(testData.length);
    expect(result.totalPages).toBe(Math.ceil(testData.length / pageSize));
    const expectedContent = testData.slice(
      (result.page - 1) * result.size,
      result.page * result.size
    );
    expect(result.content).toEqual(expectedContent);
  });
  it('should handle empty data', () => {
    const result = service.pagination([], 1, 10);
    expect(result.page).toBe(1);
    expect(result.size).toBe(10);
    expect(result.totalElements).toBe(0);
    expect(result.totalPages).toBe(0);
    expect(result.content).toEqual([]);
  });
  it('should handle data with less items than the page size', () => {
    const testData = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      value: `Item ${i + 1}`,
    }));
    const result = service.pagination(testData, 1, 10);
    expect(result.page).toBe(1);
    expect(result.size).toBe(10);
    expect(result.totalElements).toBe(testData.length);
    expect(result.totalPages).toBe(1);
    expect(result.content).toEqual(testData);
  });
  it('should handle empty data and page, size', () => {
    const result = service.pagination([]);
    expect(result.page).toBe(1);
    expect(result.size).toBe(10);
    expect(result.totalElements).toBe(0);
    expect(result.totalPages).toBe(0);
    expect(result.content).toEqual([]);
  });

  it('should call getData empty data and page, size', () => {
    const result = service['getData']([]);
    expect(result).toEqual([]);
  });
});
