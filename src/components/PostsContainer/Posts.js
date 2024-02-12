import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const {state:{userId}} = useLocation();

    useEffect(() => {
        userService.getPostsById(userId).then(({data})=>setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};