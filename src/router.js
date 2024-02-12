import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {UserPage} from "./pages/UserPage";

const router = createBrowserRouter([
    {
        path:'home', element:<HomePage/>
    },
    {
        path:'users', element:<UserPage/>
    }
]);

export {
    router
}