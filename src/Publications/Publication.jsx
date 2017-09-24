import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './publication.css';

import Link from '../components/Link';
import Code from '../components/Code';

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
            Bibtex
          </Link>]
        </div>
        {this.state.isOpen && (
          <Code>
            <div>{`@${bibtex.type}{${bibtex.id},`}</div>
            {bibtex.content.map(line => <div key={line}>{`  ${line},`}</div>)}
            <div>{'}'}</div>
          </Code>
        )}
      </section>
    );
  }
}

export default Publication;
