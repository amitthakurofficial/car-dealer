import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import theme from './helper/theme';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import layoutRoutes from "./routes/index";
import "./scss/App.scss";
import { Provider } from 'react-redux';
import store from 'redux/store';

interface AppProps {}

const App:React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route 
              exact  
              path="/" 
              render={() => <Redirect to = "/login"/>}/>
              {layoutRoutes.map((prop) => (<Route
                path={prop.path}
                component={prop.component}
                key={prop.path}/>
                ))}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </Provider>
    </div>
    
  );
}

export default App;
