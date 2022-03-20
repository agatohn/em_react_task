import { asyncActionCreator } from '../../global/redux';
import * as constants from './constants';

export const getMainPageData = asyncActionCreator(constants.GET_MAIN_PAIGE_DATA);
