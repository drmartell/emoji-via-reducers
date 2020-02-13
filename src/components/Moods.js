import React, { useReducer }  from 'react';
import PropTypes from 'prop-types';
import moodReducer from '../reducers/reducer';
import Controls from './controls/Controls';
import Face from './face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../reducers/actions/actions';
import getEmoji from '../reducers/selectors/selectors';

export default function Moods() {
  const [moodState, dispatch] = useReducer(moodReducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });
  
  const controlsInfo = [ 
    { text: 'Drink Coffee', action: () => dispatch(drinkCoffee()), count: moodState.coffees },
    { text: 'Snack', action: () => dispatch(eatSnack()), count: moodState.snacks },
    { text: 'Nap', action: () => dispatch(takeNap()), count: moodState.naps },
    { text: 'Study', action: () => dispatch(study()), count: moodState.studies }
  ];

  const mood = getEmoji(moodState);

  return (
    <>
      {/* <Controls actions={controlActions} handleSelection={name => dispatch(name)}/> */}
      {/* <Controls dispatch={dispatch} moodState={moodState} handleSelection={name => dispatch(name)}/> */}
      <Controls controlsInfo={controlsInfo} />
      <Face emoji={mood} />
    </>
  );
}
