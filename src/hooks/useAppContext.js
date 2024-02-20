import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}