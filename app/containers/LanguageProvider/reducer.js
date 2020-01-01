/*
 *
 * LanguageProvider reducer
 *
 */

// Create the next immutable state by mutating the current one https://immerjs.github.io/immer/
// The Immer package exposes a default function that does all the work.
// produce(currentState, producer: (draftState) => void): nextState
// https://github.com/immerjs/immer/blob/master/docs/produce.md
import produce from 'immer';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

// 默认state结构
export const initialState = {
  locale: DEFAULT_LOCALE,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  // 切换语言
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });

export default languageProviderReducer;
