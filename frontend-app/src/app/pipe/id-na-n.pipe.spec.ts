import { IdNaNPipe } from './id-na-n.pipe';

describe('IdNaNPipe', () => {
  let pipe: IdNaNPipe;
  beforeAll(() => {
    pipe = new IdNaNPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('id more then -1 should return this value', () => {
    const id: number = 5;
    const result: string = pipe.transform(id);
    expect(result).toBe('5');
  });

  it('if id is Nan should return "-"', () => {
    const id: number = NaN;
    const result: string = pipe.transform(id);
    expect(result).toBe('-');
  });

  it('id less then 0 should return "-"', () => {
    const id: number = -1;
    const result: string = pipe.transform(id);
    expect(result).toBe('-');
  });

  it('if id is null should return "-"', () => {
    const id: number = null;
    const result: string = pipe.transform(id);
    expect(result).toBe('-');
  });
});
