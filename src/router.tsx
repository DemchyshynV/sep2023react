import {createBrowserRouter, Navigate} from "react-router-dom";
import {AuthLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage, SomePage} from "./pages";
import {AuthRequired} from "./hoc";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>, children: [
                    {
                        path: 'cars', element: <CarsPage/>
                    },
                    {
                        path: 'somePage', element: <SomePage/>
                    }
                ]
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