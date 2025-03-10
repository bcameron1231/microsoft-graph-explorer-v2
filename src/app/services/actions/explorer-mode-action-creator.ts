import { Mode } from '../../../types/action';
import { SET_GRAPH_EXPLORER_MODE_SUCCESS } from '../redux-constants';

export function setGraphExplorerMode(mode: Mode) {
  return {
    type: SET_GRAPH_EXPLORER_MODE_SUCCESS,
    response: mode,
  };
}
