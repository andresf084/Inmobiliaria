import { TestBed } from '@angular/core/testing';

import { CityDataAPIService } from './city-data-api.service';

describe('CityDataAPIService', () => {
  let service: CityDataAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityDataAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
