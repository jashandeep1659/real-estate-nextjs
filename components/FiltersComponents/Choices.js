import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import Link from "next/link";

const Choices = (props) => {
    const router = useRouter();
    const [reseturl, setreseturl] = useState("");
    const [isPresent, setisPresent] = useState(false);

    useEffect(() => {
        if (router.isReady == true) {
            let url = `/property/?`;
            let isthere = false;
            for (const i in router.query) {
                if (i !== props.slug) {
                    url += `${i}=${router.query[i]}&`;
                } else {
                    isthere = true;
                }
            }
            if (isthere) {
                setisPresent(true);
            } else {
                setisPresent(false);
            }
            setreseturl(url);
        }
    }, [router.isReady, router, router.query]);

    const SwiperCardRender = ({ data }) => {
        let url = `/property/?`;
        let isActive = false;
        for (const i in router.query) {
            if (i == props.slug) {
                url += `${i}=${data.slug}&`;
                if (router.query[i] == data.slug) {
                    isActive = true;
                } else [(isActive = false)];
            } else {
                url += `${i}=${router.query[i]}&`;
            }
        }
        if (!router.query.hasOwnProperty(props.slug)) {
            url += `${props.slug}=${data.slug}&`;
        }
        return (
            <Link href={url}>
                <a>
                    <button className={isActive ? "active" : null}>
                        {data.name}
                    </button>
                </a>
            </Link>
        );
    };

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            className="choicesswiper mt-2 text-sm"
        >
            {" "}
            {isPresent ? (
                <SwiperSlide>
                    <Link href={reseturl}>
                        <a className="text-blue-700 underline">Clear</a>
                    </Link>
                </SwiperSlide>
            ) : null}
            {props.data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <SwiperCardRender data={item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Choices;
