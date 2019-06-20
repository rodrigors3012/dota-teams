import { TestBed } from '@angular/core/testing';

import { TeamsApiService } from './teams-api.service';

describe('TeamsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsApiService = TestBed.get(TeamsApiService);
    expect(service).toBeTruthy();
  });
});
