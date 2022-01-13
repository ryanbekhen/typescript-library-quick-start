import { Hello } from '../src/index';

describe('Index', () => {
  it('return Hello World', () => {
    expect(Hello()).toEqual('Hello World');
  })
})