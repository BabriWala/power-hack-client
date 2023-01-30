import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import BillingList from "../Pages/BillingList/BillingList";
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/billinglist',
                element: <BillingList></BillingList>
            }
        ]
    }
]);
