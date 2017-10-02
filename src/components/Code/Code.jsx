import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import copy from 'copy-to-clipboard';

import styles from './code.css';

import IconLink from '../IconLink';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: null,
};

const getText = children =>
  Children.map(children, child => child.props.children).join('\n');

const Code = ({ children, className, ...props }) => (
  <pre className={cx(className, styles.main)} {...props}>
    {children}
    <IconLink
      className={styles.clipboard}
      containerComponent="button"
      onClick={() => copy(getText(children))}
      icon="clipboard"
      title="Copy to clipboard"
    />
  </pre>
);

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;

export default Code;
