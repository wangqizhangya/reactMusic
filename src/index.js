import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore} from 'react-router-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App } from './components/App.js'; 
import { Home } from './components/Home.js'; 
import { Detail } from './components/Detail.js'; 
import { store } from './stores/store.js';

let appElement = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store)

render((
	<Provider store={store}>
    <Router history={history}>
        <Route path='/' component={App}>
          	<IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
           
            <Route path="detail" component={Detail}/>
        </Route>
    </Router>
    </Provider>
    ),appElement
);

