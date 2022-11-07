import React from "react";
import Link from "next/link";
const PopularCities = ({ cities }) => {
    const CitiesRender = () =>
        cities.results.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <Link href={`/property/?city__slug=${item.slug}`}>
                        <a>
                            <img
                                src={item.image}
                                alt="servicecard"
                                className="rounded-lg"
                            />
                            <h2>{item.name}</h2>
                        </a>
                    </Link>
                </div>
            );
        });

    return (
        <section id="PopularCities">
            <div className="title">
                <h1>Popular Cities</h1>
                <p>Get the property in the Popular cities</p>
            </div>
            <div className="cards">
                <CitiesRender />
            </div>
        </section>
    );
};

export default PopularCities;
