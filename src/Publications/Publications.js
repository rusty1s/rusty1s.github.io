import React from "react";

import publications from "./publications.json";

const Publications = () =>
  <div>
    {publications.map(p =>
      <article>
        <header>
          {p.name}
        </header>
        {p.author &&
          <header>
            {p.author}
          </header>}
        {p.description.map(des =>
          <div>
            {des}
          </div>
        )}
        <div>
          [
          {p.refs.map(ref =>
            <span>
              <a href={ref.href}>
                {ref.name}
              </a>
              {", "}
            </span>
          )}
          <button>bibtex</button>
          ]
        </div>
        <pre>
          <div>
            {`@${p.bibtex.type}{${p.bibtex.id},`}
          </div>
          {p.bibtex.content.map(line => <div>{`  ${line},`}</div>)}
          <div>
            {"}"}
          </div>
        </pre>
      </article>
    )}
  </div>;

export default Publications;
