import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('search by column based on search keyword', () => {
    const value = [ { 'name': 'ABC', 'email': 'abc.com' } ];
    const args = [ 'name', 'ABC' ];
    const result = pipe.transform(value, args);
    expect(result).toEqual(value);
  });
});
