import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../services";
import {PostDetails} from "../components";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams();


    useEffect(() => {
        postService.byId(id).then(({data}) => setPostDetails(data))
    }, [id])

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};