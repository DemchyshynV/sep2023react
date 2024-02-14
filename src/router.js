import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {userService} from "./services/userService";

const router = createBrowserRouter([
        {
            path: '', element: <MainLayout/>, children: [
                {
                    index: true, element: <Navigate to={'users'}/>
                },
                {
                    path: 'users', element: <UsersPage/>, loader: () => userService.getAll(), children: [
                        {
                            path: ':id', element: <UserDetailsPage/>, loader:({params:{id}})=>userService.getById(id)
                        },
                    ]
                }
            ]
        }
    ])
;

export {
    router
}