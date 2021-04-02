import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';

const app = () => ReactDOMServer.renderToString(<App />);
export default app;
