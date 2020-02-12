export default function getEmoji(state) {

  const isTired = state => state.coffees < 1 && state.naps < 1;
  const isHyper = state => state.coffees > 3;
  const isEducated = state => state.studies > 2;
  const isHungry = state => state.snacks < 1;

  if(isTired(state) && isHungry(state)) return '😠';
  if(isHyper(state) && isHungry(state)) return '😱';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '😲';
  if(isHungry(state)) return '😡';
  return '😀';
  
}
