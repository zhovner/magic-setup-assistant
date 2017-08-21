import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { WifiSelect, IProps } from '../components/WifiSelect';
import * as WifiActions from '../actions/wifi';
import { IState } from '../reducers';

function mapStateToProps(state: IState): Partial<IProps> {
  return {
    accessPoints: state.accessPoints
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<IProps> {
  return bindActionCreators(WifiActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(WifiSelect) as any as React.StatelessComponent<IProps>);