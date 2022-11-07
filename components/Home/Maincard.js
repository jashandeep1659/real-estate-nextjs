import React, { useState, useEffect } from "react";

const Maincard = () => {
    const [minHeightneeded, setminHeightneeded] = useState(0);
    const minHeightfinder = () => {
        try {
            setminHeightneeded(
                document.getElementById("main-card").clientHeight
            );
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        minHeightfinder();
    }, []);
    return (
        <section className="main">
            <img src="./images/main.png" alt="main" />
            <div
                className="card"
                style={{ marginTop: -minHeightneeded / 2 + "px" }}
                id="main-card"
            >
                <div className="form">
                    <h2>Search</h2>
                    <ul>
                        <li className="active">All</li>
                        <li>Buy</li>
                        <li>Rental</li>
                        <li>PG/hostel</li>
                        <li>Office</li>
                    </ul>
                    <div className="input-div">
                        <input type="text" placeholder={`Search "Delhi"`} />
                        <button>
                            <i className="bx bx-search"></i>
                        </button>
                    </div>
                </div>
                <div className="detail">
                    <h1>
                        Find the{" "}
                        <span>
                            Perfect <br></br> house,PG or office
                        </span>{" "}
                        <br />
                        for you and your family with <br />
                        <span>Deep Real Estate</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Maincard;
