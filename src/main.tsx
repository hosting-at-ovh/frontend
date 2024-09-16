import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

import './index.css';
import {ColorProvider} from "./context/ColorContext.tsx";
import ColorPickerDialog from "./components/shared/color-picker-dialog.tsx";

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
          <ColorProvider>
              <App/>
              <div className="fixed bottom-4 right-4 z-20">
                  <ColorPickerDialog/>
              </div>
          </ColorProvider>
      </BrowserRouter>
  </StrictMode>,
)
