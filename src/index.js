import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Privacy from './pages/privacy/Privacy';
import
{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Policy from './pages/Policy/Policy';
import TNC from './pages/TnC/TNC'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/privacy",
            element: <Privacy />,
        },
        {
            path: "/disclaimer",
            element: <Disclaimer />,
        },
        {
            path: "/policy",
            element: <Policy />
        },
        {
            path: "/tnc",
            element: <TNC />
        }
    ]
);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
    , document.getElementById( "root" )
);
