import './App.css';
import ThemeContextProvider from './config/Context/ThemeContext';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Routes from './config/router';

const App = () => {

  const options = {
    offset: '100px',
    timeout: 5000,
    position: positions.TOP_RIGHT
  };
  return (
    <Provider template={AlertTemplate} {...options}>
      <ThemeContextProvider>
        <Routes>
        </Routes>
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
