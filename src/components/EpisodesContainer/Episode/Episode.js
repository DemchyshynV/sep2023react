import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';
import {useAppContext} from "../../../hoc";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setName(name)
        navigate(`/characters/${ids}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};