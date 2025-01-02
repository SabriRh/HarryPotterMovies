import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform 90 to "1h 30m"', () => {
    expect(pipe.transform('90')).toBe('1h 30min');
  });

  it('should transform 120 to "2h 0m"', () => {
    expect(pipe.transform('120')).toBe('2h 0min');
  });

  it('should transform 45 to "0h 45m"', () => {
    expect(pipe.transform('45')).toBe('0h 45min');
  });

  it('should transform 0 to "0h 0m"', () => {
    expect(pipe.transform('0')).toBe('0h 0min');
  });

  it('should transform 150 to "2h 30m"', () => {
    expect(pipe.transform('150')).toBe('2h 30min');
  });
});
