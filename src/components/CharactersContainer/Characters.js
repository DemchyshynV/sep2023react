import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../store";
import {Character} from "./Character";

const Characters = () => {
    const {ids} = useParams();
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(charactersActions.getAll({ids}))
    }, [ids])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};