import { actionCreatorVoid } from './helpers';

export const requestAccessPointList = actionCreatorVoid('REQUEST_AP_LIST');

export function requestAccessPoints(delay: number = 1000) {
  return (dispatch: Function) => {
    setTimeout(() => {
      dispatch(requestAccessPointList());
    }, delay);
  };
}