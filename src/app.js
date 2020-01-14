import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RemotejobApp from './components/RemotejobApp';
import configureStore from '../store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <RemotejobApp />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
