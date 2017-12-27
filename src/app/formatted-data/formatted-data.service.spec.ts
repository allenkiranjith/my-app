import { TestBed, inject } from '@angular/core/testing';

import { FormattedDataService } from './formatted-data.service';

describe('FormattedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormattedDataService]
    });
  });

  it('should be created', inject([FormattedDataService], (service: FormattedDataService) => {
    expect(service).toBeTruthy();
  }));
});
