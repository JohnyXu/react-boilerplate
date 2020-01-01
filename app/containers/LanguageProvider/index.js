/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Selector library for Redux
// https://github.com/reduxjs/reselect#readme
// createSelector(...inputSelectors | [inputSelectors], resultFunc)
// Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc.
import { createSelector } from 'reselect';

// https://github.com/formatjs/react-intl
// Internationalize React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

export function LanguageProvider(props) {
  return (
    <IntlProvider
      locale={props.locale}
      key={props.locale}
      messages={props.messages[props.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}

// 类型检查
LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export default connect(mapStateToProps)(LanguageProvider);
