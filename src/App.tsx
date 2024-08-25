import { HashRouter } from 'react-router-dom';
import { Router } from './Router';

export const App = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};
