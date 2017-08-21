import { IAction } from '../actions/helpers';
import { requestAccessPointList } from '../actions/wifi';

interface TAccesPoint {
  name: string
}
export type TState = Array<TAccesPoint>;

const initialState = [
  {
    name: "Test"
  }
];

export default function accessPoint(state: TState = initialState, action: IAction) {
  if (requestAccessPointList.test(action)) {
    return [
      ...state, action.payload
    ]
  }

  return state;
}