import { TestBed } from '@angular/core/testing';

import { AuthenticationClient } from './authentication-client.service';

describe('AuthenticationClientService', () => {
  let service: AuthenticationClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
