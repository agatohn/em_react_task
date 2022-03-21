import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import { mappedFilmsData } from './helpers';
import MainPageService from './service';

export function* getMainPageDataSaga() {
  try {
    const responce = yield call(MainPageService.getMainPageData);
    const filmsResponce = yield all(
      responce.data.films.map(filmUrl => call(MainPageService.getMainPageDataFilms, filmUrl)),
    );
    const filmsData = mappedFilmsData(filmsResponce);
    const completeData = { ...responce.data, films: filmsData };
    yield put(actions.getMainPageData.success(completeData));
  } catch (error) {}
}

export function* mainPageWatcherSaga() {
  yield all([takeLatest(actions.getMainPageData.REQUEST, getMainPageDataSaga)]);
}
