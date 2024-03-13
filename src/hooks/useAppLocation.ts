import {Location, useLocation} from "react-router-dom";

export const useAppLocation = <T>():Location<T>=>useLocation()