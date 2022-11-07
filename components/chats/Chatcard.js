import React, { useEffect, useState } from "react";
import Link from "next/link";
const Chatcard = ({ item, main }) => {
    const [minHeightneeded, setminHeightneeded] = useState(0);
    const [minCardHeight, setminCardHeight] = useState(0);
    useEffect(() => {
        setminHeightneeded(
            document.getElementById("card-content").clientHeight
        );
    }, []);
    useEffect(() => {
        setminCardHeight(
            document.getElementById("ProjectCard").clientHeight +
                minHeightneeded / 2
        );
    }, [minHeightneeded]);
    return (
        <Link href={`/chat/${main.id}`}>
            <section
                id="ProjectCard"
                className="card"
                style={{ minHeight: minCardHeight + "px" }}
            >
                <img
                    src={item ? item.image : "./images/projectimage.png"}
                    alt="1"
                />
                <div
                    className="card-content"
                    id="card-content"
                    style={{ marginTop: -minHeightneeded / 2 + "px" }}
                >
                    <h5>{item ? item.name : "No Namefount"}</h5>
                    <h4>{item ? item.city.name : "Not found"}</h4>
                    <h3>₹{item ? item.price : "00"}</h3>
                </div>
            </section>
        </Link>
    );
};

export default Chatcard;
