import {useParams} from "react-router-dom";

import {Posts} from "../components";

const PostsPage = () => {
    const {id} = useParams();

    return (
        <div>
            <Posts userId={id}/>
        </div>
    );
};

export {PostsPage};