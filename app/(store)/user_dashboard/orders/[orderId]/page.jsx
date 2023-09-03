"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import classes from "./page.module.css";
import Link from "next/link";

const page = (props) => {
    const [cookies] = useCookies(["token"]);
    const token = cookies["token"];
    const [orderData, setData] = useState([]);
    const [orderItemData, setItemData] = useState([]);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/order/getOrderById/${props.params.orderId}`,
                { headers }
            )
            .then((response) => {
                setData(response.data.data);
                setItemData(response.data.data.orderItems);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <section className="mainContainer">
            <div className={classes.heading}>
                <p>
                    مشتريات الطلب رقم <span>{props.params.orderId}</span>
                </p>
            </div>
            <div className={classes.table}>
                <div className={classes.head}>
                    <div>الرقم</div>
                    <div>اسم المنتج</div>
                    <div>السعر</div>
                    <div> الكميه</div>
                    <div>الاجمالي</div>
                </div>
                {orderItemData.map((item, index) => {
                    let costItem = item.unitPrice * item.quantity;
                    return (
                        <div className={classes.body} key={index}>
                            <div>{index + 1}</div>
                            <Link href={`/${item.productId}`}>
                                <div>{item.productName}</div>
                            </Link>
                            <div>{item.unitPrice.toFixed(2)}</div>
                            <div>{item.quantity}</div>
                            <div>{costItem.toFixed(2)}</div>
                        </div>
                    );
                })}
                <div className={classes.total}>
                    <p>
                        <span>الاجمالي (بدون الضريبه)</span>
                        <span>
                            {orderData.total !== undefined &&
                            !isNaN(orderData.total)
                                ? orderData.total.toFixed(2)
                                : "..."}
                        </span>
                    </p>
                    <p>
                        <span>الاجمالي (مع الضريبه)</span>
                        <span>
                            {orderData.totalPay !== undefined &&
                            !isNaN(orderData.totalPay)
                                ? orderData.totalPay.toFixed(2)
                                : "..."}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default page;
