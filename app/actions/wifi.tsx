import { actionCreator } from './helpers';

export const requestAccessPointList = actionCreator('REQUEST_AP_LIST');

export function requestAccessPoints(delay: number = 1000) {
  return (dispatch: Function) => {
    setTimeout(() => {
      dispatch(requestAccessPointList([{
        name: "Beeline"
      }]));
    }, delay);
  };
}