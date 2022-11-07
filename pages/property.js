import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BaseURL } from "../axiosInstance";
import ProjectCard from "../components/Home/ProjectCard";
import Filters from "../components/Filters";
const Properties = (props) => {
    const ProjectsRender = () =>
        props.properties.results.map((item, index) => {
            return <ProjectCard key={index} item={item} />;
        });
    return (
        <section id="Properties">
            <Navbar />
            <div className="my-container">
                <Filters />
            </div>
            <section id="ProjectsRender">
                <div className="title">
                    <h1>Properties</h1>
                    <p>Recently listed projects.</p>
                </div>
                <div className="cards">
                    <ProjectsRender />
                </div>
            </section>
        </section>
    );
};

export async function getServerSideProps(context) {
    let url = "core/projects/?limit=10&";
    for (const key in context.query) {
        url += `${key}=${context.query[key]}&`;
    }
    const properties = await axios.get(`${BaseURL}${url}`);

    return {
        props: {
            properties: properties.data,
        }, // will be passed to the page component as props
    };
}

export default Properties;
