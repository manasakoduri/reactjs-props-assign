import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Nav from './Nav';
import Intro from './Intro';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Intro />
  </StrictMode>
);
