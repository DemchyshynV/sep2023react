import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                path: 'cars', element: <CarsPage/>
            },
            {
                path: 'login', element: <LoginPage/>
            },
            {
                path: 'register', element: <RegisterPage/>
            }
        ]
    }
])

export {
    router
}