"use client";
import React from "react";
import classes from "./Main.module.css";
import { useSearchParams } from "next/navigation";
import Home from "./home/Home";
import Order from "./order/Order";
import Users from "./users/Users";
import Settings from "./Settings/Settings";
import Update from "./Update/Update";
const Main = (props) => {
    const router = useSearchParams();
    const content = router.get("content");
    return (
        <div className={classes.section}>
            {content == null && (
                <>
                    <div className={classes.head}>
                        <p>admin dashboard</p>
                    </div>
                    <Home staticData={props.staticData}/>
                </>
            )}
            {content === "order" && <Order />}
            {content === "webSite" && <WebSite />}
            {content === "category" && <Category />}
            {content === "sub_category" && <SubCategory />}
            {content === "brand" && <Brand />}
            {content === "products" && <Product />}
            {content === "addNewProduct" && <AddNewProduct />}
            {content === "Advertisements" && <Ads/>}
            {content === "users" && <Users/>}
            {content === "settings" && <Settings/>}
            {content === "update" && <Update/>}

        </div>
    );
};

export default Main;
