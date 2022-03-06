import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuElements } from './data/MenuElements';

function App() {
  return (
    <Router>
      <Menu />
      {MenuElements.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}

export default App;
