"use client";
import React, { Fragment, useState } from "react";
import classes from "./Aside.module.css";
import Link from "next/link";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { TbSettings, TbUsers } from "react-icons/tb";
import { MdKeyboardArrowDown, MdLogout, MdWeb } from "react-icons/md";
import { BiGridAlt } from "react-icons/bi";
const Aside = (props) => {
    const [showList, setShowList] = useState(false);
    function handleShowList() {
        setShowList(!showList);
    }
    return (
        <Fragment>
            <aside className={classes.aside}>
                <div className={classes.sidebar}>
                    <Link href="/" className={classes.top}>
                        <img src="/images/mainLogo-2.png" />
                    </Link>
                    <Link
                        href={{
                            pathname: "/dashboard",
                        }}
                    >
                        <BiGridAlt />

                        <p>Executive Summary</p>
                    </Link>
                    <Link
                        href={{
                            pathname: "/dashboard",
                            query: { content: "order" },
                        }}
                    >
                        <BiGridAlt/>
                        <p>NPS Quality Metrics</p>
                        {/* <div className={classes.numOrders}>
                            <p>20</p>
                        </div> */}
                    </Link>

                    <Link
                        href={{
                            pathname: "/dashboard",
                            query: { content: "users" },
                        }}
                    >
                        <BiGridAlt />
                        <p>NPS Trending Attributes</p>
                    </Link>
                    <Link
                        href={{
                            pathname: "/dashboard",
                            query: { content: "settings" },
                        }}
                    >
                        <BiGridAlt />
                        <p>NPS Free Text Analysis</p>
                    </Link>
                    <Link
                    href={{
                        pathname: "/dashboard",
                        query: { content: "update" },
                    }}
                >
                    <BiGridAlt />
                    <p>Customer Pulse Analysis</p>
                </Link>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.img}>
                        <img src="/images/person.png" alt="" />
                    </div>
                    <div>
                        <p className={classes.name}>Ryan</p>
                        <p>admin</p>
                    </div>
                </div>
            </aside>
        </Fragment>
    );
};

export default Aside;
