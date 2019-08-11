import {combineEpics} from 'redux-observable';

import {fetchProductEpic} from './productEpics';

export const rootEpic = combineEpics(
    fetchProductEpic
);
