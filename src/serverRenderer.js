import React from "react";
import { renderToString } from 'react-dom/server';
import App from "./App";
import { StaticRouter } from 'react-router-dom';
import { configureStore, sagaMiddleware } from './store';

import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
} from '@material-ui/core/styles';
import { moviesSaga } from "./actions";

function renderHTML(html, preloadedState, css) {
    return `
    <!doctype html>
  <html>
    <head>
      <meta charset=utf-8>
      <title>React Server Side Rendering</title>
      <style id="jss-server-side">${css}</style>
         ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
      </head>
          <body>
           <div id="root">${html}</div>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script  src="/bundle.js"></script>
          </body>
        </html>
    `;
}




export default function serverRenderer() {
    return (req, res) => {
        // This context object contains the results of the render
        const context = {};
        const store = configureStore();

        const sheetsRegistry = new SheetsRegistry();
        // Create a sheetsManager instance.
        const sheetsManager = new Map();
        // Create a theme instance.
        const theme = createMuiTheme({
            typography: {
                useNextVariants: true,
            }
        });

        const generateClassName = createGenerateClassName();
        const renderRoot = () => (
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                    <App context={context}
                        location={req.url}
                        Router={StaticRouter}
                        store={store}
                    />
                </MuiThemeProvider>
            </JssProvider>
        );
        store.runSaga().toPromise().then(() => {
            const htmlString = renderToString(renderRoot());

            // context.url will contain the URL to redirect to if a <Redirect> was used
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();
               console.log("asdasdasdddddddddddd");
            const css = sheetsRegistry.toString()
            res.send(renderHTML(htmlString, preloadedState, css));
        })
        // Do first render, starts initial actions.
        renderToString(renderRoot());
        // When the first render is finished, send the END action to redux-saga.
        store.close();
    };
}