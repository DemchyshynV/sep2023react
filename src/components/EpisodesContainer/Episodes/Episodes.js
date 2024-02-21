import {useEffect, useState} from "react";

import {episodeService} from "../../../services";
import {usePageQuery} from "../../../hooks";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';

const Episodes = () => {
    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []})
    const {page, nextPage, prevPage} = usePageQuery();

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => setEpisodeRes(() => {
            const {info: {next, prev}, results} = data;
            return {
                next,
                prev,
                results
            }
        }))
    }, [page]);


    return (
        <div>
            <div className={css.list_of_episodes}>
                {episodeRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodeRes.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodeRes.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};