import {Outlet} from "react-router-dom";

import {Comments} from "../components/CommentsContainer/Comments";

const CommentsPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};