import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseServiceService', () => {
  interface Test {
    statusCode: number;
  }
  let service: BaseService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
