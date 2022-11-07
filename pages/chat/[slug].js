import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

const ChatPageSpecial = () => {
    const [heightofnav, setheightofnav] = useState();
    const router = useRouter();
    const [messages, setmessages] = useState([]);
    useEffect(() => {
        try {
            setheightofnav(
                document.getElementById("Nav").clientHeight +
                    document.getElementById("MessageArea").clientHeight
            );
            setTimeout(() => {
                let element = document.getElementById("Main");
                element.scrollTop = element.scrollHeight;
            }, 100);
        } catch (err) {}
    }, []);

    const fetchMessages = () => {
        axiosInstance.get(`core/chat/${router.query["slug"]}`).then((res) => {
            setmessages(res.data.chat);
        });
    };
    useEffect(() => {
        if (router.isReady) {
            fetchMessages();
        }
    }, [router, router.isReady]);

    const ChatRender = () => {
        return (
            <>
                <div className="chat left">
                    <div className="area">
                        <p>
                            This is how we can make the best in the world This
                            is how we can make the best in the world This is how
                            we can make the best in the world This is how we can
                            make the best in the world This is how we can make
                            the best in the world
                        </p>
                    </div>
                </div>
                <div className="chat right">
                    <div className="area">
                        <p>
                            This is how we can make the best in the world This
                            is how we can make the best in the world This is how
                            we can make the best in the world This is how we can
                            make the best in the world This is how we can make
                            the best in the world
                        </p>
                    </div>
                </div>
            </>
        );
    };
    return (
        <section id="ChatPageSpecial">
            <div className="nav" id="Nav">
                <div className="left">
                    <Link href="/chats">
                        <a>
                            <i className="bx bx-left-arrow-alt"></i>
                        </a>
                    </Link>
                </div>
                <div className="right"></div>
            </div>
            <div
                className="main"
                id="Main"
                style={{ height: `calc(100vh - ${heightofnav}px)` }}
            >
                <div className="chats">
                    <div className="chat left">
                        <div className="area">
                            <p>
                                This is how we can make the best in the world
                                This is how we can make the best in the world
                                This is how we can make the best in the world
                                This is how we can make the best in the world
                                This is how we can make the best in the world
                            </p>
                        </div>
                    </div>
                    <div className="chat right">
                        <div className="area">
                            <img src="https://images.pexels.com/photos/13756268/pexels-photo-13756268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </div>
                    </div>
                    <ChatRender />
                    <ChatRender />
                    <ChatRender />
                    <ChatRender />
                    <ChatRender />
                    <ChatRender />
                </div>
            </div>
            <div className="message-area" id="MessageArea">
                <div className="input">
                    <div className="left">
                        <i className="bx bxs-image-add"></i>
                    </div>
                    <form>
                        <input type="text" placeholder="Type a message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ChatPageSpecial;
