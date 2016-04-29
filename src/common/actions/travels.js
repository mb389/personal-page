import request from 'axios';

export const ADD_MARKER = 'ADD_MARKER';
export const SAVE_MAP = 'SAVE_MAP';

export function saveMap(map) {
  return {
    type: SAVE_MAP,
    map
  }
}

export function addMarker(id, marker) {
  return {
    type: ADD_MARKER,
    id,
    marker
  }
}
