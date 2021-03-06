/**
 *
 * ButtonTest
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ButtonTest() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ButtonTest.propTypes = {};

export default memo(ButtonTest);
