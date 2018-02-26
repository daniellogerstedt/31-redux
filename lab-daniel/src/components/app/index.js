import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from '../landing/';
import Dashboard from '../landing/';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log(`__STATE__: ${store.getState()}`));
  }

  render () {
    return (
      <main className='main-content'>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/dashboard' component={Dashboard}/>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;