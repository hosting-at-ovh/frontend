import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

import './index.css';

/**
 * The main application component.
 * Uses `useRoutes` to render the routes defined in the `routes` object.
 *
 * @returns {JSX.Element} The rendered routes.
 */
const App = (): JSX.Element => {
    return useRoutes(routes) as JSX.Element;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
