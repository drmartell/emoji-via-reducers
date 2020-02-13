const actionMap = {
  DRINK_COFFEE: state => ({ ...state, coffees: state.coffees + 1 }),
  EAT_SNACK:    state => ({ ...state, snacks: state.snacks + 1 }),
  TAKE_NAP:     state => ({ ...state, naps: state.naps + 1 }),
  STUDY:        state => ({ ...state, studies: state.studies + 1 })
};

export default function reducer(state, action) {
  return actionMap[action.type]?.(state) || state;
}
