import { TestBed } from '@angular/core/testing';

import { UserDataService } from './userdata.service';

describe('Userdata.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});
