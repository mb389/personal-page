

import {
  ADD_MARKER,
  SAVE_MAP
} from '../actions/travels';

export default function main(state={
  markerA: '',
  markerB: '',
  map: {}
}, action={}) {
  switch (action.type) {
    case ADD_MARKER:
      // TODO redesign to work with any number of markers
    case SAVE_MAP: {
      return Object.assign(state.map,action.map);
    }
    default:
      return state;
  }
}
