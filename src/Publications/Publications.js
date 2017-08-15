import React from "react";

import "./publications.css";
import Code from "../components/Code";
import publications from "./publications.json";

// TODO: Copy to clipboard

const Publications = () =>
  <div className="publications">
    {publications.map(p =>
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
          <button>Bibtex</button>
          ]
        </footer>
        <Code>
          <div>
            {`@${p.bibtex.type}{${p.bibtex.id},`}
          </div>
          {p.bibtex.content.map(line => <div key={line}>{`  ${line},`}</div>)}
          <div>
            {"}"}
          </div>
        </Code>
      </section>
    )}
  </div>;

export default Publications;
