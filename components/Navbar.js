import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
    const AppContextData = useContext(AppContext);
    return (
        <section id="Navbar">
            <div className="logo">
                <Link href="/">
                    <a>
                        <img src="/images/logo.png" alt="logo" />
                    </a>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <a>For Sale</a>
                </li>
                <li>
                    <a>For Rent</a>
                </li>
                <li>
                    <Link href="/chats">
                        <a>Chats</a>
                    </Link>
                </li>
                {!AppContextData.userLoginStatus ? (
                    <li className="button">
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                ) : null}
            </ul>
        </section>
    );
};

export default Navbar;
