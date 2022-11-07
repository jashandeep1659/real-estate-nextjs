import React, { useEffect, useState } from "react";

const ProjectImages = (props) => {
    const [images, setimages] = useState([]);
    const [currentImage, setcurrentImage] = useState(props.main);

    const imagesAdder = () => {
        setimages([]);
        console.log(props.others);
        let dummy = [];
        props.others.map((item) => {
            dummy.push(item.image);
        });
        setimages(dummy);
    };

    const AllimagesRender = () =>
        images.map((item, index) => {
            return (
                <img
                    src={item}
                    className="w-1/3"
                    alt={index}
                    key={index}
                    onClick={() => setcurrentImage(item)}
                />
            );
        });

    useEffect(() => {
        setcurrentImage(props.main);
        imagesAdder();
    }, [props]);
    return (
        <section id="ProjectImages">
            <img src={currentImage} />
            <div
                className="others flex gap-4 my-4"
                style={{ overflow: "auto" }}
            >
                <img
                    src={props.main}
                    className="w-1/3"
                    onClick={() => setcurrentImage(props.main)}
                />
                {AllimagesRender()}
            </div>
        </section>
    );
};

export default ProjectImages;
