import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actions';

export function* getMainPageDataSaga() {
  try {
    console.log('saga');
  } catch (error) {}
}

export function* mainPageWatcherSaga() {
  yield all([takeLatest(actions.getMainPageData.REQUEST, getMainPageDataSaga)]);
}
