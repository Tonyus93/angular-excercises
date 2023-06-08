import { UppercaseSymbolPipe } from './uppercase-symbol.pipe';

describe('UppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseSymbolPipe();
    expect(pipe).toBeTruthy();
  });
});
