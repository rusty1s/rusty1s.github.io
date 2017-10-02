import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import copy from 'copy-to-clipboard';

import styles from './publication.css';

import Link from '../components/Link';
import IconLink from '../components/IconLink';
import Icon from '../components/Icon';
import Code from '../components/Code';

const getBibtexString = ({ type, id, content }) =>
  `@${type}{${id},\n${content.map(line => `  ${line}`).join(',\n')},\n}`;

class Publication extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string.isRequired),
    refs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired
    ),
    bibtex: PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    author: null,
    description: null,
    refs: [],
  };

  state = {
    isOpen: false,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { name, author, description, refs, bibtex } = this.props;
    const { isOpen } = this.state;
    const bibtexString = getBibtexString(bibtex);

    return (
      <section className={styles.main}>
        <div className={styles.name}>{name}</div>
        {author && <div>{author}</div>}
        {description &&
          description.map(line => (
            <div key={line} className={styles.description}>
              {line}
            </div>
          ))}
        <div>
          [{refs.map(ref => (
            <span key={ref.name}>
              <Link href={ref.href}>{ref.name}</Link>
              {', '}
            </span>
          ))}
          <Link containerElement="button" onClick={this.toggle}>
            <Icon
              name="angle-down"
              className={cx(styles.arrow, isOpen && styles.isOpen)}
            />
            Bibtex
          </Link>]
        </div>
        {isOpen && (
          <div className={styles.bibtex}>
            <Code>{bibtexString}</Code>
            <IconLink
              containerElement="button"
              title="Copy to clipboard"
              className={styles.clipboard}
              onClick={() => copy(bibtexString)}
            >
              <Icon name="clipboard" />
            </IconLink>
          </div>
        )}
      </section>
    );
  }
}

export default Publication;
