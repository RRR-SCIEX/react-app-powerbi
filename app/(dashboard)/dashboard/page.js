"use client";
import { useEffect, useState } from "react";
import classes from "./dashboard.module.css";
import Aside from "@/components/dashboard/aside/Aside";
import Main from "@/components/dashboard/main/Main";
import "./globals.css";


const page = () => {
    return (
        <section className={classes.dashboardHome}>
            {<Aside />}
            {<Main />}
        </section>
    );
};

export default page;
