import './App.css';
import Membres from './pages/Membres.js';
import Planning from './pages/Planning';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Tarifs from './pages/Tarifs';
import ThemeContextProvider from './config/Context/ThemeContext';
import { useState } from 'react';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Club from './pages/Club';

const App = () => {

  const [theme, setTheme] = useState("light")
  const options = {
    offset: '100px',
    timeout: 5000,
    position: positions.TOP_RIGHT
  };
  return (
<Provider template={AlertTemplate} {...options}>
    <ThemeContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/accueil" exact component={Home} />
          <Route path="/club" exact component={Club} />
          <Route path="/membres" exact component={Membres} />
          <Route path="/planning" exact component={Planning} />
          <Route path="/tarifs" exact component={Tarifs} />
        </Switch>
      </BrowserRouter>
    </ThemeContextProvider>
    </Provider>
  );
}

export default App;
