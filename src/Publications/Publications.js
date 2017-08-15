import React from "react";

import Code from "../components/Code";
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
        <Code>
          <div>
            {`@${p.bibtex.type}{${p.bibtex.id},`}
          </div>
          {p.bibtex.content.map(line => <div>{`  ${line},`}</div>)}
          <div>
            {"}"}
          </div>
        </Code>
      </article>
    )}
  </div>;

export default Publications;
