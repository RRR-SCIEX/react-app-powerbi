import classes from "./page.module.css";
import Dashboard from "@/components/dashboard/main/Main";

import { Fragment } from "react";

export const metadata = {
    title: "comma care",
};

const carouselMain = [
    {
        imgSrc: "/images/dummy-img-2.webp",
        href: "",
    },
    {
        imgSrc: "/images/dummy-img.webp",
        href: "",
    },
];

export default async function Home() {
    return (
        <Fragment>
                <section className={classes.section}>
                   
                </section>
        </Fragment>
    );
}
