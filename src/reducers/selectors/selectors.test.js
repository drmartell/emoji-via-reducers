import getEmoji from './selectors';

describe('emoji selector', () => {
  it('should return the 😠 emoji given app\'s default state (tired and hungry)', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    expect(getEmoji(state)).toEqual('😠');
  });
});

describe('emoji selector', () => {
  it('should return the 😱 emoji when coffees are > 3 and snacks < 1', () => {
    const state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    
    expect(getEmoji(state)).toEqual('😱');
  });
});

describe('emoji selector', () => {
  it('should return the 😴 emoji when tired but not hungry', () => {
    const state = {
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    };

    expect(getEmoji(state)).toEqual('😴');
  });
});

describe('emoji selector', () => {
  it('should return the 🙀 emoji when hyper', () => {
    const state = {
      coffees: 4,
      snacks: 1,
      naps: 0,
      studies: 0
    };

    expect(getEmoji(state)).toEqual('🙀');
  });
});

describe('emoji selector', () => {
  it('should return the 😲 emoji when educated', () => {
    const state = {
      coffees: 1,
      snacks: 0,
      naps: 1,
      studies: 3
    };

    expect(getEmoji(state)).toEqual('😲');
  });
});

describe('emoji selector', () => {
  it('should return the 😡 emoji when hungry', () => {
    const state = {
      coffees: 1,
      snacks: 0,
      naps: 1,
      studies: 0
    };

    expect(getEmoji(state)).toEqual('😡');
  });
});

describe('emoji selector', () => {
  it('should return 😀 emoji if no other emoji\'s apply', () => {
    const state = {
      coffees: 1,
      snacks: 1,
      naps: 1,
      studies: 0
    };

    expect(getEmoji(state)).toEqual('😀');
  });
});
