import { BudgetPipe } from './budget.pipe';

describe('BudgetPipe', () => {
  let pipe: BudgetPipe;

  beforeEach(() => {
    pipe = new BudgetPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "100" to "$100 millions"', () => {
    expect(pipe.transform('100')).toBe('$100 millions');
  });

  it('should transform "0" to "$0 millions"', () => {
    expect(pipe.transform('0')).toBe('$0 millions');
  });

  it('should return an empty string for empty string value', () => {
    expect(pipe.transform('')).toBe('');
  });
});