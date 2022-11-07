import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Choices from "./FiltersComponents/Choices";

const Filters = () => {
    const AppContextData = useContext(AppContext);
    const [clearURL, setclearURL] = useState("#");
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            setclearURL(router.pathname);
        }
    }, [router.isReady]);

    return (
        <section id="Filters">
            <h1>
                Filters{" "}
                <Link href={clearURL}>
                    <a className="text-xs font-light underline">Clear all</a>
                </Link>
            </h1>
            <div className="filters">
                <div className="city-filters mt-2">
                    <h2>City</h2>
                    <Choices
                        data={AppContextData.CitiesContext}
                        slug={"city__slug"}
                    />
                </div>
                <div className="category-filters mt-4">
                    <h2>Category</h2>
                    <Choices
                        data={AppContextData.CategoriesContext}
                        slug={"category__slug"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Filters;
