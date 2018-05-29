const assert = require('chai').assert;


describe('destructuring also works on strings', () => {

  it('destructure every character', () => {
    let [a, b, c] = 'abcd';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });

  it('missing characters are undefined', () => {
    const [a,,c] = 'ab';
    assert.equal(c, void 0);
  });

  it('unicode character work too', () => {
    const [, space, coffee] = 'a ☕';
    assert.equal(coffee, '\u{2615}');
  });

});
