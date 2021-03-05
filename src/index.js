import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import config from './config';

const store = createStore(reducer);

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={{ 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    minHeight: "100vh",
                 }}>
                    <h3>An Error has occurred</h3>
                    <a href="/">Go back home</a>
                </div>
            );
        }

        return this.props.children;
    }
}

const app = (
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
