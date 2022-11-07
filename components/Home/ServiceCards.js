import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";

const ServiceCards = () => {
    const AppContextData = useContext(AppContext);
    const ServicesRender = () =>
        AppContextData.CategoriesContext.map((item, index) => {
            console.log(item);
            return (
                <Link
                    href={`/property/?category__slug=${item.slug}`}
                    key={index}
                >
                    <a>
                        <div className="card">
                            <img src="./servicecard.png" alt="servicecard" />
                            <h2>{item.name}</h2>
                        </div>
                    </a>
                </Link>
            );
        });
    return (
        <section id="Types">
            <h1>Our Services</h1>
            <div className="cards">
                <ServicesRender />
            </div>
        </section>
    );
};

export default ServiceCards;
{
    /* <div className="card">
<img src="./servicecard.png" alt="servicecard" />
<h2>Buy Home</h2>
</div>
<div className="card">
<img src="./servicecard.png" alt="servicecard" />
<h2>Buy Home</h2>
</div>
<div className="card">
<img src="./servicecard.png" alt="servicecard" />
<h2>Buy Home</h2>
</div>
<div className="card">
<img src="./servicecard.png" alt="servicecard" />
<h2>Buy Home</h2>
</div>
<div className="card">
<img src="./servicecard.png" alt="servicecard" />
<h2>Buy Home</h2>
</div> */
}
