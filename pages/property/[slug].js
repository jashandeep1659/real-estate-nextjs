import axios from "axios";
import React from "react";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/others/BackButton";
import ProjectImages from "../../components/others/ProjectImages";
import { BaseURL } from "../../axiosInstance";
import ProjectCard from "../../components/Home/ProjectCard";
import Footer from "../../components/Home/Footer";
import Link from "next/link";
const PropertyPage = (props) => {
    const HandPicksbuyRender = () =>
        props.handpicksbuy.results.map((item, index) => {
            return <ProjectCard key={index} item={item.building} />;
        });
    const HandPicksrentRender = () =>
        props.handpicksrent.results.map((item, index) => {
            return <ProjectCard key={index} item={item.building} />;
        });
    return (
        <section id="PropertyPage">
            <Navbar />
            <section id="PropertyPage__hero">
                <BackButton />
                <div className="main">
                    <div className="images">
                        <ProjectImages
                            main={props.project.image}
                            others={props.project.images}
                        />
                    </div>
                    <div className="details">
                        <Link
                            href={`/property/?city__slug=${props.project.city.slug}`}
                        >
                            <a className="underline text-gray-500 hover:tracking-wider duration-300">
                                <h3>{props.project.city.name}</h3>
                            </a>
                        </Link>
                        <h2>{props.project.name}</h2>
                        <div className="price">
                            <p>Make it your's at</p>
                            <h1>₹ {props.project.price}</h1>
                        </div>
                        <div className="features">
                            <h5>Features</h5>
                            <ul>
                                <li>Near to Airport.</li>
                                <li>Near to hospital.</li>
                                <li>2 Bedrooms</li>
                                <li>2 Bathrooms</li>
                                <li>Private parking</li>
                                <li>Fully secured society</li>
                                <li>Well connect to major parts of the city</li>
                                <li>Fully Furnished house</li>
                            </ul>
                        </div>
                        <div className="buttons">
                            <button className="button1">
                                Have a talk with the seller
                            </button>
                            <button className="button2">
                                Locality Reviews by other peoples
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="BestAtyourlocations">
                <div className="title">
                    <h1>Handpicked Project for sale</h1>
                    <p>Best collection of projects in your city.</p>
                </div>
                <div className="cards">
                    <HandPicksbuyRender />
                </div>
            </section>{" "}
            <section id="BestAtyourlocations">
                <div className="title">
                    <h1>Handpicked Project for rent</h1>
                    <p>Best collection of projects in your city.</p>
                </div>
                <div className="cards">
                    <HandPicksrentRender />
                </div>
            </section>
            <Footer />
        </section>
    );
};
export async function getServerSideProps(context) {
    const project = await axios.get(
        `${BaseURL}core/projects/${context.query.slug}/`
    );
    const handpicksbuy = await axios.get(
        `${BaseURL}core/handpicks/?limit=3&building__category__slug=buy`
    );
    const handpicksrent = await axios.get(
        `${BaseURL}core/handpicks/?limit=3&building__category__slug=rent`
    );
    return {
        props: {
            project: project.data,
            handpicksbuy: handpicksbuy.data,
            handpicksrent: handpicksrent.data,
        }, // will be passed to the page component as props
    };
}
export default PropertyPage;
