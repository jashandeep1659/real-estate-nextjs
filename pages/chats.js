import React, { useEffect, useState } from "react";
import axiosInstance, { BaseURL } from "../axiosInstance";
import Chatcard from "../components/chats/Chatcard";
import Navbar from "../components/Navbar";

const Chats = () => {
    const [chats, setchats] = useState([]);

    const fecthChats = () => {
        axiosInstance.get(`core/chat`).then((res) => {
            setchats(res.data.results);
        });
    };

    const ChatsRender = () =>
        chats.map((item, index) => {
            return <Chatcard key={index} item={item.property} main={item} />;
            // return "s";
        });

    useEffect(() => {
        fecthChats();
    }, []);

    return (
        <section id="ChatPage">
            <Navbar />

            <div className="page">
                <section id="BestAtyourlocations">
                    <div className="title">
                        <h1>On Goning Chats</h1>
                        <p>Here are your latest chats with our agents.</p>
                    </div>
                    <div className="cards">
                        <ChatsRender />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Chats;
