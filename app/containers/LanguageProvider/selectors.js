import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the language domain
 */

const selectLanguage = state => state.language || initialState;

/**
 * Select the language locale
 */

// createSelector(...inputSelectors | [inputSelectors], resultFunc)
// Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc.
const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    languageState => languageState.locale,
  );

export { selectLanguage, makeSelectLocale };
