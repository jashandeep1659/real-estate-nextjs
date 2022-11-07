import React from "react";
import { useRouter } from "next/router";
const BackButton = () => {
    const router = useRouter();
    console.log(router);
    return (
        <button className="backbutton" onClick={() => router.back()}>
            Back
        </button>
    );
};

export default BackButton;
