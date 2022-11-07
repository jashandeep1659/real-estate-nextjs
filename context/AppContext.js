import { createContext, useEffect, useState } from "react";
import axiosInstance, { BaseURL } from "../axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
export const AppContext = createContext();
const AppContextState = (props) => {
    const [userLoginStatus, setuserLoginStatus] = useState(false);
    const [CitiesContext, setCitiesContext] = useState([]);
    const [CategoriesContext, setCategoriesContext] = useState([]);

    const router = useRouter();
    const UserLoginFunction = (email, password) => {
        axios
            .post(`${BaseURL}api/token/`, { email: email, password: password })
            .then((res) => {
                Cookies.set("tokens", JSON.stringify(res.data));
                setuserLoginStatus(true);
                router.push("/");
            });
    };

    const UserLoginVerifier = () => {
        axiosInstance
            .get(`core/projects`)
            .then((res) => {
                setuserLoginStatus(true);
            })
            .catch((err) => {
                setuserLoginStatus(false);
            });
    };

    const CitiesFecther = () => {
        axios.get(`${BaseURL}core/cities?limit=100`).then((res) => {
            setCitiesContext(res.data.results);
        });
    };

    const CategoriesFecther = () => {
        axios.get(`${BaseURL}core/categories/`).then((res) => {
            setCategoriesContext(res.data);
        });
    };

    useEffect(() => {
        UserLoginVerifier();
        CitiesFecther();
        CategoriesFecther();
        return () => {};
    }, []);

    return (
        <AppContext.Provider
            value={{
                userLoginStatus: userLoginStatus,
                UserLoginFunction: UserLoginFunction,
                CitiesContext: CitiesContext,
                CategoriesContext: CategoriesContext,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextState;
