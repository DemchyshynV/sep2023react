import {Character} from "./components/Character";

const App = () => {
    const characters = [
        {
            id: 1,
            name: 'Smith',
            img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg'
        },
        {
            id: 2,
            name: 'Rick',
            img: 'https://pm1.narvii.com/6821/35d5368cc28759b51ee08cbfb2c319da55c4ec72v2_00.jpg'

        }, {
            id: 3,
            name: 'Джері',
            img: 'https://cdn.rikmorti.ru/uploads/2020/02/dzherri-smit-pod-dulom-pistoleta-rikmorti-ru.jpg'

        },
    ]
    return (
        <div>
            {characters.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};