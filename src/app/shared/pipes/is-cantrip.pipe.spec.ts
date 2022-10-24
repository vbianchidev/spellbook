import { IsCantripPipe } from './is-cantrip.pipe';

describe('SpellLevelPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCantripPipe();
    expect(pipe).toBeTruthy();
  });
});
