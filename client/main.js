import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

//import 'popper.js/dist/umd/popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@coreui/coreui/dist/js/coreui.js'
import '@coreui/coreui/dist/css/coreui.css';
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';

import App from '../imports/core-ui-admin/App';
import { icons } from '../imports/core-ui-admin/assets/icons'
import store from '../imports/core-ui-admin/store'

React.icons = icons

Meteor.startup(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('app')
    );
});
