import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {loading, error} = useSelector(state => state.cars);
    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error&& <h1>{error}</h1>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};