import { TestBed } from '@angular/core/testing';

import { SpellResolver } from './spell.resolver';

describe('SpellResolver', () => {
  let resolver: SpellResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SpellResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
