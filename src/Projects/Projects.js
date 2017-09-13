import React from 'react';

import projects from './projects.json';

const Projects = () => (
  <div>{projects.map(project => <article>{project.name}</article>)}</div>
);

export default Projects;

// TODO:
// https://api.github.com/users/rusty1s/repos (filter by name list)
// add stars and forks, issues, maybe labels
// hover readme text on image
