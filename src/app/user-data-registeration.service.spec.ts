import { TestBed } from '@angular/core/testing';

import { UserDataRegisterationService } from './user-data-registeration.service';

describe('UserDataRegisterationService', () => {
  let service: UserDataRegisterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataRegisterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
