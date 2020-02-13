import { drinkCoffee, eatSnack, takeNap, study } from './actions/actions';
import reducer from './reducer';

describe('mood reducer', () => {
  it('can increment coffee', () => {
    const initialState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = drinkCoffee();
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ 
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('can increment snacks', () => {
    const initialState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = eatSnack();
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ 
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });

  it('can increment naps', () => {
    const initialState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = takeNap();
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ 
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 0
    });
  });

  it('can increment studies', () => {
    const initialState = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = study();
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    });
  });
});
