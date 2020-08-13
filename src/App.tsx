import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { store } from './store/configureStore';
import Regions from './pages/regions/RegionsContainer';
import Countries from "./pages/countries/CountriesContainer"
import Country from './pages/country/CountryContainer';
import Header from "./components/Header"

const App: React.FC = () => {
	return (
    <BrowserRouter>
      <Provider store={store}>
		  <Header />
      <Switch>
        	<Route component={Regions} path="/" exact />
          <Route component={Countries} path="/countries/:region"/>
          <Route component={Country} path="/country/:countryName"/>
      </Switch>
      </Provider>
    </BrowserRouter>
	);
}

export default App;
