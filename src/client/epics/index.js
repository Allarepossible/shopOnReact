import {combineEpics} from 'redux-observable';

import {fetchProductEpic} from './productEpics';

export default combineEpics({
    fetchProductEpic,
});
