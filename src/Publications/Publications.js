import React, { Component } from "react";
import cx from "classnames";

import "./publications.css";
import Code from "../components/Code";
import publications from "./publications.json";

class Publications extends Component {
  state = {
    openedBibtexs: []
  };

  toggleBibtex = id => {
    let { openedBibtexs } = this.state;
    if (openedBibtexs.includes(id))
      openedBibtexs = openedBibtexs.filter(idx => idx !== id);
    else openedBibtexs = [...openedBibtexs, id];

    this.setState({ openedBibtexs });
  };

  render() {
    return (
      <div className="publications">
        {publications.map((p, id) =>
          <section key={p.name} className="publication">
            <header className="name">
              {p.name}
            </header>
            {p.author &&
              <div className="author">
                {p.author}
              </div>}
            {p.description.map(des =>
              <div key={des} className="description">
                {des}
              </div>
            )}
            <footer>
              [
              {p.refs.map(ref =>
                <span key={ref.name}>
                  <a href={ref.href}>
                    {ref.name}
                  </a>
                  {", "}
                </span>
              )}
              <button
                className="bibtex-button"
                onClick={() => this.toggleBibtex(id)}
              >
                Bibtex
              </button>
              ]
            </footer>
            <Code
              className={cx(
                "bibtex",
                this.state.openedBibtexs.includes(id) && "opened"
              )}
            >
              <div>
                {`@${p.bibtex.type}{${p.bibtex.id},`}
              </div>
              {p.bibtex.content.map(line =>
                <div key={line}>{`  ${line},`}</div>
              )}
              <div>
                {"}"}
              </div>
            </Code>
          </section>
        )}
      </div>
    );
  }
}

export default Publications;
