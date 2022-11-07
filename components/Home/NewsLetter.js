import React from "react";

const NewsLetter = () => {
    return (
        <section id="Newsletter">
            <h1>Newsletter</h1>
            <p>
                Get email as the we list the new buildling according to your
                intrest
            </p>
            <div className="form">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </section>
    );
};

export default NewsLetter;
