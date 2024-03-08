import {apiService} from "./apiService";
import {urls} from "../constants";
import axios from "axios";

const characterService = {
    getByIds: async (ids) => {
        const {data: characters} = await apiService.get(urls.characters.byIds(ids));
        const promises = []

        for (const character of characters) {
            promises.push(axios.get(character.image, {responseType: "blob"}))
        }

        const responses = await Promise.all(promises);
        const res = responses.map(response => URL.createObjectURL(response.data));
        console.log(res);

        for (let i = 0; i < characters.length; i++) {
            characters[i].image = res[i]

        }
        console.log(characters, '!!!!!!!!!!!!!!!');

        return characters

    }
}

export {
    characterService
}