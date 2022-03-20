import { createReducer } from '@reduxjs/toolkit';
import store from '../../store';
import * as actions from './actions';

const initialState = {
  loading: false,
  error: null,
  data: null,
};
const reducer = createReducer(initialState, {
  [actions.getMainPageData.REQUEST]: () => {
    console.log('request reducer');
  },
});

const mainPageData = store => store.mainPageReducer.data;

const selectors = { mainPageData };
export { reducer, initialState, selectors };
export default reducer;
