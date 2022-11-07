import React, { useEffect, useState } from "react";
import Footer from "../components/Home/Footer";
import Maincard from "../components/Home/Maincard";
import NewsLetter from "../components/Home/NewsLetter";
import ProjectCard from "../components/Home/ProjectCard";
import ServiceCards from "../components/Home/ServiceCards";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar";
import PopularCities from "../components/PopularCities";
import { BaseURL } from "../axiosInstance";
import axios from "axios";

const Home = (props) => {
    const NewProjectsRender = () =>
        props.newprojects.results.map((item, index) => {
            return <ProjectCard key={index} item={item} />;
        });

    const HandPicksbuyRender = () =>
        props.handpicksbuy.results.map((item, index) => {
            return <ProjectCard key={index} item={item.building} />;
        });
    const HandPicksrentRender = () =>
        props.handpicksrent.results.map((item, index) => {
            return <ProjectCard key={index} item={item.building} />;
        });

    return (
        <section id="Home">
            <Navbar />
            <Maincard />
            <ServiceCards />
            <section id="BestAtyourlocations">
                <div className="title">
                    <h1>New Listed Properties</h1>
                    <p>Recently listed projects.</p>
                </div>
                <div className="cards">
                    <NewProjectsRender />
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
            <PopularCities cities={props.popularCities} />
            <NewsLetter />
            <Testimonials />
            <Footer />
        </section>
    );
};

export async function getServerSideProps(context) {
    const newprojects = await axios.get(`${BaseURL}core/projects/?limit=6`);
    const popularCities = await axios.get(`${BaseURL}core/cities/?limit=5`);
    const handpicksbuy = await axios.get(
        `${BaseURL}core/handpicks/?limit=3&building__category__slug=buy`
    );
    const handpicksrent = await axios.get(
        `${BaseURL}core/handpicks/?limit=3&building__category__slug=rent`
    );
    return {
        props: {
            newprojects: newprojects.data,
            popularCities: popularCities.data,
            handpicksbuy: handpicksbuy.data,
            handpicksrent: handpicksrent.data,
        }, // will be passed to the page component as props
    };
}

export default Home;
