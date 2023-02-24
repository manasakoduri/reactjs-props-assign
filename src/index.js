import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Nav from './Nav';
import Intro from './Intro';
import Blog from './Blog';
import Tech from './Tech';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Intro />
    <Blog />
    <Tech />
  </StrictMode>
);
