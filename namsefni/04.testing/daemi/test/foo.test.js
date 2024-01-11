import { describe, expect, it } from '@jest/globals';
import { reverse } from '../src/lib/reverse.js';

describe('main.js', () => {
  it('should reverse a string', () => {
    const input = 'bar';

    const result = reverse(input);

    expect(result).toBe('rab');
  });
});
