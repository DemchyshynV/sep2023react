import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {Post} from "../components/PostsContainer/Post";
import {postService} from "../services/postService";

const PostsPage = () => {
    const [post, setPost] = useState(null)
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostsPage};