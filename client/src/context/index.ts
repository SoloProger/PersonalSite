import { createContext } from "react";
import { IAuthContext } from "../types/context/auth";

const defaultContext = { isAuth: false, setIsAuth: (value = false) => {} };

export const AuthContext = createContext<IAuthContext>(defaultContext);
