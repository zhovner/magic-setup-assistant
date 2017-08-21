import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import accessPoints, { TState as TAccesPointState } from './accessPoint';


const rootReducer = combineReducers({
  accessPoints,
  routing: routing as Reducer<any>
});

export interface IState {
  accessPoints: TAccesPointState;
}

export default rootReducer;
