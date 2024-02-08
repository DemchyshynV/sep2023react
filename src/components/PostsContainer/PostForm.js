import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = (item)=>{
        postService.create(item).then(({data})=> setPosts(prev=>[...prev, data]));
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <input type="text" placeholder={'street'} {...register('address.street')}/>
            <button>save</button>
        </form>
    );
};

export {PostForm};