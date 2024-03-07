import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').splice(-1)[0]).join(',');
        navigate(`/characters/${ids}`)
    }

    return (
        <div onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};