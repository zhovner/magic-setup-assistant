import { IAction } from '../actions/helpers';

export type TState = any;

export default function counter(state: TState = [{name: "Test"}], action: IAction) {
  return state;
}