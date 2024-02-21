import {useContext} from "react";

import {Context} from "./ContextProvider";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}