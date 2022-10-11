import { TestBed } from '@angular/core/testing';

import { BianchiUiService } from './bianchi-ui.service';

describe('BianchiUiService', () => {
  let service: BianchiUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BianchiUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
